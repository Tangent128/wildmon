use super::{Gender, Species, WildmonSettings};
use rand::{seq::SliceRandom, Rng};

const MISSINGNO: &'static str = "Missingno.";
static DEFAULT_GENDERS: &[Gender] = &[Gender::Male, Gender::Female, Gender::Agender];

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

    let allowed_genders = match opts.allow_genders.len() {
        0 => DEFAULT_GENDERS,
        _ => &opts.allow_genders,
    };
    let mut gender = species.gender.randomize(rng);
    if !allowed_genders.contains(&gender) {
        gender = opts
            .allow_genders
            .choose(rng)
            .copied()
            .unwrap_or(Gender::Agender);
    }

    let level = rng.gen_range(1..=100);

    let mut mon = format!("Wild {}{} (lv{})", name, gender.symbol(), level);

    if !opts.whitespace {
        mon = mon.replace(" ", "_")
    }

    mon
}
