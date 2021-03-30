use std::{fmt::Display, mem};

use super::{Gender, Species, WildmonSettings};
use rand::{seq::SliceRandom, Rng};

const MISSINGNO: &'static str = "Missingno.";
static DEFAULT_GENDERS: &[Gender] = &[Gender::Male, Gender::Female, Gender::Agender];

#[derive(Debug, Eq, PartialEq, Ord, PartialOrd)]
pub enum Modifier {
    Mega,
    MegaXY,
    Kantonian,
    Johtoan,
    Hoennese,
    Sinn,
    Unovan,
    Kalosian,
    Alolan,
    Galarian,
    Shadow,
    Imaginary,
    Complex,
    Delta,
    Dark,
    Light,
    Giant,
    Pink,
    Feral,
    Ex,
    Prime,
    Civilized,
    Baby,
    Omnipotent,
    Plushie,
    Toy,
    Shiny,
    Pokerus,
}

enum Level {
    Real(u8),
    Imaginary(u8),
    Complex(u8, u8),
    Infinity
}

impl Display for Level {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Level::Real(n) => write!(f, "{}", n),
            Level::Imaginary(n) => write!(f, "{}i", n),
            Level::Complex(r, i) => write!(f, "{}+{}i", r, i),
            Level::Infinity => write!(f, "∞"),
        }
    }
}

struct Mon<'a> {
    species: &'a Species,
    prefix: String,
    name: String,
    suffix: String,
    gender: Gender,
    level: Level,
    modifiers: Vec<Modifier>,
}

impl<'a> Mon<'a> {
    fn apply_modifiers<'r, R: Rng + ?Sized>(&mut self, rng: &'r mut R) {
        use Modifier::*;
        self.modifiers.sort();
        let mut modifiers = mem::replace(&mut self.modifiers, Vec::new());
        modifiers.drain(..).for_each(|modifier| match modifier {
            Mega => {}
            MegaXY => {}
            Kantonian => {}
            Johtoan => {}
            Hoennese => {}
            Sinn => {}
            Unovan => {}
            Kalosian => {}
            Alolan => {}
            Galarian => {}
            Shadow => self.prefix = "Shadow".into(),
            Imaginary => {
                self.prefix = "Imaginary".into();
                self.level = Level::Imaginary(rng.gen_range(1..=100));
            }
            Complex => {
                self.prefix = "Complex".into();
                self.level = Level::Complex(rng.gen_range(1..=100), rng.gen_range(1..=100));
            }
            Delta => {}
            Dark => self.prefix = "Dark".into(),
            Light => self.prefix = "Light".into(),
            Giant => self.prefix = "Giant".into(),
            Pink => self.prefix = "Pink".into(),
            Feral => self.prefix = "Feral".into(),
            Ex => {}
            Prime => {}
            Civilized => self.prefix = "Civilized".into(),
            Baby => {
                self.prefix = "Baby".into();
                self.level = Level::Real(rng.gen_range(1..=9));
            }
            Omnipotent => {
                self.prefix = "Omnipotent".into();
                self.level = Level::Infinity;
            }
            Plushie => {}
            Toy => {}
            Shiny => self.prefix = "Shiny".into(),
            Pokerus => {}
        })
    }
}

impl<'a> ToString for Mon<'a> {
    fn to_string(&self) -> String {
        format!(
            "{} {}{}{} (lv{})",
            self.prefix,
            self.name,
            self.gender.symbol(),
            self.suffix,
            self.level
        )
    }
}

fn pick_name<'r, 's, R: Rng + ?Sized>(rng: &'r mut R, species: &'s Species) -> &'s str {
    if species.names.len() > 1 && rng.gen_ratio(1, 14) {
        species.names[1..]
            .choose(rng)
            .map(AsRef::as_ref)
            .unwrap_or(MISSINGNO)
    } else {
        match species.names.first() {
            Some(name) => name.as_ref(),
            None => MISSINGNO,
        }
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
    let level = Level::Real(rng.gen_range(1..=100));

    let mut mon: Mon = Mon {
        species,
        prefix: "Wild".into(),
        name: name.into(),
        suffix: String::new(),
        gender,
        level,
        modifiers: Vec::new(),
    };

    match rng.gen_range(1..=50) {
        1 => mon.modifiers.push(Modifier::Shadow),
        2 => mon.modifiers.push(Modifier::Imaginary),
        3 => mon.modifiers.push(Modifier::Complex),
        4 => mon.modifiers.push(Modifier::Delta),
        5 => mon.modifiers.push(Modifier::Dark),
        6 => mon.modifiers.push(Modifier::Light),
        7 => mon.modifiers.push(Modifier::Giant),
        8 => mon.modifiers.push(Modifier::Pink),
        9 => mon.modifiers.push(Modifier::Feral),
        11 => mon.modifiers.push(Modifier::Ex),
        12 => mon.modifiers.push(Modifier::Prime),
        17 => mon.modifiers.push(Modifier::Civilized),
        18 => mon.modifiers.push(Modifier::Baby),
        19 => mon.modifiers.push(Modifier::Omnipotent),
        20 => mon.modifiers.push(Modifier::Plushie),
        21 => mon.modifiers.push(Modifier::Toy),
        _ => {}
    };

    if rng.gen_ratio(1, 4096) {
        mon.modifiers.push(Modifier::Shiny)
    }
    if rng.gen_ratio(3, 65536) {
        mon.modifiers.push(Modifier::Pokerus)
    }

    mon.apply_modifiers(rng);

    let mut mon_str = mon.to_string();

    if !opts.whitespace {
        mon_str = mon_str.replace(" ", "_")
    }

    mon_str
}
