use rand::thread_rng;
use wildmon::{wildmon, WildmonSettings};

pub fn main() {
    println!("{}", wildmon(&mut thread_rng(), &WildmonSettings::default()));
}
