#[macro_use]
extern crate serde_derive;

extern crate serde;
extern crate serde_json;

/// The shape of the list of Pokémon used in the original Speeqe-based name generator
#[derive(Serialize, Deserialize, Debug)]
pub struct SpeeqeFormat(Vec<String>, i8);

#[cfg(test)]
mod tests {
    use serde_json;
    use std::fs::File;
    use ::SpeeqeFormat;

    #[test]
    fn parse_speeqe_format() {
        let speeqe_file = File::open("src/data/speeqe.json").unwrap();
        let speeqe_data: Vec<SpeeqeFormat> = serde_json::from_reader(&speeqe_file).unwrap();

        assert_eq!(speeqe_data[0].0[0], "Missingno.");
        // NidoranM is always male, gender ratio value = 8
        assert_eq!(speeqe_data[29].1, 8);
        assert_eq!(speeqe_data[151].0[0], "Mew");
    }
}
