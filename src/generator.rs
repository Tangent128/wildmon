use super::{Gender, Species, WildmonSettings};
use rand::{seq::SliceRandom, Rng};

const MISSINGNO: &'static str = "Missingno.";
static DEFAULT_GENDERS: &[Gender] = &[Gender::Male, Gender::Female, Gender::Agender];

fn pick_name<'r, 's, R: Rng + ?Sized>(_rng: &'r mut R, species: &'s Species) -> &'s str {
    match species.names.first() {
        Some(name) => name.as_ref(),
        None => MISSINGNO,
    }
}
fn pick_gender<R: Rng + ?Sized>(
    rng: &mut R,
    species: &Species,
    allow_genders: &Vec<Gender>,
) -> Gender {
    let allowed_genders = match allow_genders.len() {
        0 => DEFAULT_GENDERS,
        _ => &allow_genders,
    };
    let gender = species.gender.randomize(rng);
    if allowed_genders.contains(&gender) {
        gender
    } else {
        allowed_genders
            .choose(rng)
            .copied()
            .unwrap_or(Gender::Agender)
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

    let name = pick_name(rng, species);
    let gender = pick_gender(rng, species, &opts.allow_genders);
    let level = rng.gen_range(1..=100);

    let mut mon = format!("Wild {}{} (lv{})", name, gender.symbol(), level);

    if !opts.whitespace {
        mon = mon.replace(" ", "_")
    }

    mon
}
