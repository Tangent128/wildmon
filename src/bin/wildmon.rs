use rand::thread_rng;
use wildmon::{POKEDEX, WildmonSettings, wildmon};

pub fn main() {
    println!("{}", wildmon(&mut thread_rng(), &POKEDEX, &WildmonSettings::default()));
}
