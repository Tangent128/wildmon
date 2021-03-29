use rand::thread_rng;
use wildmon::{wildmon, Gender, WildmonSettings, POKEDEX};

pub fn main() {
    let mut settings = WildmonSettings::default();

    for arg in std::env::args() {
        match arg.as_ref() {
            "m" => settings.allow_gender(Gender::Male),
            "f" => settings.allow_gender(Gender::Female),
            "ag" => settings.allow_gender(Gender::Agender),
            "w" => settings.whitespace(true),
            _ => {}
        }
    }

    println!("{}", wildmon(&mut thread_rng(), &POKEDEX, &settings));
}
