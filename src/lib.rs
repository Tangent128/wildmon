use std::ops::Not;

use once_cell::sync::Lazy;
use rand::{seq::SliceRandom, Rng};
use serde_derive::{Deserialize, Serialize};
use serde_yaml;

pub static POKEDEX: Lazy<Vec<Species>> = Lazy::new(|| {
    serde_yaml::from_str(include_str!("data/species.yaml")).expect("Parsing embedded YAML pokédex")
});

pub const MISSINGNO: &'static str = "Missingno.";

/// The shape of the new Pokémon list format
#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub struct Species {
    pub names: Vec<String>,
    pub gender: Gender,

    #[serde(skip_serializing_if = "Vec::is_empty")]
    #[serde(default = "Vec::new")]
    pub tags: Vec<SpeciesTag>,
}

#[derive(Copy, Clone, Serialize, Deserialize, Debug, PartialEq)]
pub enum Gender {
    Agender,
    Male,
    Female,
    Ratio(f32),
}

impl Gender {
    pub fn symbol(&self) -> &'static str {
        match self {
            Gender::Agender => "",
            Gender::Male => "♂",
            Gender::Female => "♀",
            Gender::Ratio(_) => "?",
        }
    }

    pub fn randomize<R: Rng + ?Sized>(&self, rng: &mut R) -> Gender {
        // TODO: trans rights
        match self {
            Gender::Agender => Gender::Agender,
            Gender::Male => Gender::Male,
            Gender::Female => Gender::Female,
            Gender::Ratio(ratio) => {
                let g: f32 = rng.gen();
                if g < *ratio {
                    Gender::Female
                } else {
                    Gender::Male
                }
            }
        }
    }
}

/// Tags indicating a species is eligable for certain specific modifiers
#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub enum SpeciesTag {
    Mega,
    MegaXY,
    AlolaForm,
}

pub struct WildmonSettings {
    canon: bool,
    whitespace: bool,
    allow_genders: Vec<Gender>,
}

impl Default for WildmonSettings {
    fn default() -> Self {
        WildmonSettings {
            canon: true,
            whitespace: false,
            allow_genders: vec![Gender::Male, Gender::Female, Gender::Agender],
        }
    }
}

pub fn wildmon<R: Rng + ?Sized>(
    rng: &mut R,
    pokedex: &Vec<Species>,
    opts: &WildmonSettings,
) -> String {
    drop(opts.canon);

    let species = match pokedex.choose(rng) {
        Some(species) => species,
        None => return MISSINGNO.into(),
    };
    let name = match species.names.first() {
        Some(name) => name.as_ref(),
        None => MISSINGNO,
    };

    let mut gender = species.gender.randomize(rng);
    if opts.allow_genders.contains(&gender).not() {
        gender = opts
            .allow_genders
            .choose(rng)
            .copied()
            .unwrap_or(Gender::Agender);
    }

    let level = rng.gen_range(1..=100);

    if opts.whitespace {
        format!("Wild {}{} (lv{})", name, gender.symbol(), level)
    } else {
        format!("Wild_{}{}_(lv{})", name, gender.symbol(), level)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn parse_species_format() {
        let species_data: &Vec<Species> = &POKEDEX;

        assert_eq!(species_data[0].names[0], "Missingno.");
        // Charmander has a defined gender ratio
        assert_eq!(species_data[6].gender, Gender::Ratio(0.125));
        // NidoranF is always female
        assert_eq!(species_data[29].gender, Gender::Female);
        // NidoranM is always male
        assert_eq!(species_data[32].gender, Gender::Male);
        // Mew is Agender
        assert_eq!(species_data[151].gender, Gender::Agender);
        assert_eq!(species_data[151].names[0], "Mew");
    }
}
