use serde_derive::{Deserialize, Serialize};

pub const POKEDEX_YAML: &'static str = include_str!("data/species.yaml");

/// The shape of the new Pokémon list format
#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub struct Species {
    pub names: Vec<String>,
    pub gender: Gender,

    #[serde(skip_serializing_if = "Vec::is_empty")]
    #[serde(default = "Vec::new")]
    pub tags: Vec<SpeciesTag>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub enum Gender {
    Agender,
    Male,
    Female,
    Ratio(f32),
}

/// Tags indicating a species is eligable for certain specific modifiers
#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub enum SpeciesTag {
    Mega,
    MegaXY,
    AlolaForm,
}

#[cfg(test)]
mod tests {
    use super::*;
    use serde_yaml;

    #[test]
    fn parse_species_format() {
        let species_data: Vec<Species> = serde_yaml::from_str(POKEDEX_YAML).unwrap();

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
