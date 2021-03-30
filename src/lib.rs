use once_cell::sync::Lazy;
use rand::Rng;
use serde_derive::{Deserialize, Serialize};
use serde_yaml;

mod generator;
pub use generator::wildmon;

pub static POKEDEX: Lazy<Vec<Species>> = Lazy::new(|| {
    serde_yaml::from_str(include_str!("data/species.yaml")).expect("Parsing embedded YAML pokédex")
});

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
        match self {
            Gender::Ratio(ratio) => {
                let g: f32 = rng.gen();
                if g < *ratio {
                    Gender::Female
                } else {
                    Gender::Male
                }
            }
            g => *g,
        }
    }
}

/// Tags indicating a species is eligable for certain specific modifiers
#[derive(Serialize, Deserialize, Debug, Eq, PartialEq, Ord, PartialOrd)]
pub enum SpeciesTag {
    Mega,
    MegaXY,
    Primal,
    Kantonian,
    Johtoan,
    Hoennese,
    Sinn,
    Unovan,
    Kalosian,
    Alolan,
    Galarian,
}

#[derive(Debug, Clone)]
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
            allow_genders: Vec::new(),
        }
    }
}

impl WildmonSettings {
    pub fn reset_genders(&mut self) {
        self.allow_genders = Vec::new();
    }
    pub fn allow_gender(&mut self, gender: Gender) {
        self.allow_genders.push(gender);
    }
    pub fn canon(&mut self, canon: bool) {
        self.canon = canon;
    }
    pub fn whitespace(&mut self, whitespace: bool) {
        self.whitespace = whitespace;
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
