use std::{fmt::Display, mem};

use crate::SpeciesTag;

use super::{Gender, Species, WildmonSettings};
use rand::{seq::SliceRandom, Rng};

const MISSINGNO: &'static str = "Missingno.";
static DEFAULT_GENDERS: &[Gender] = &[Gender::Male, Gender::Female, Gender::Agender];

#[derive(Debug, Eq, PartialEq, Ord, PartialOrd)]
pub enum Modifier {
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

#[derive(Debug, PartialEq)]
enum Level {
    Real(u8),
    Imaginary(u8),
    Complex(u8, u8),
    Infinity,
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

#[derive(Debug, PartialEq)]
enum Meganess {
    Normal,
    Mega,
    MegaX,
    MegaY,
    Primal,
    Dynamax,
    Gigantamax,
    Eternamax,
}

impl Display for Meganess {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Meganess::Normal => write!(f, ""),
            Meganess::Mega => write!(f, "Mega"),
            Meganess::MegaX => write!(f, "Mega"),
            Meganess::MegaY => write!(f, "Mega"),
            Meganess::Primal => write!(f, "Primal"),
            Meganess::Dynamax => write!(f, "Dynamax"),
            Meganess::Gigantamax => write!(f, "Gigantamax"),
            Meganess::Eternamax => write!(f, "Eternamax"),
        }
    }
}

impl Meganess {
    fn suffix(&self) -> &str {
        match self {
            Meganess::MegaX => "X",
            Meganess::MegaY => "Y",
            _ => "",
        }
    }
}

struct Mon<'a> {
    species: &'a Species,
    name: String,
    gender: Gender,
    level: Level,
    modifiers: Vec<Modifier>,
    prefix: &'static str,
    suffix: &'static str,
    shiny: bool,
    delta: bool,
    pokerus: bool,
    meganess: Meganess,
}

impl<'a> Mon<'a> {
    fn apply_modifiers<'r, R: Rng + ?Sized>(&mut self, rng: &'r mut R) {
        use Modifier::*;
        self.modifiers.sort();
        let mut modifiers = mem::replace(&mut self.modifiers, Vec::new());
        modifiers.drain(..).for_each(|modifier| match modifier {
            Mega => self.meganess = Meganess::Mega,
            MegaXY => {
                if rng.gen_ratio(1, 2) {
                    self.meganess = Meganess::MegaX
                } else {
                    self.meganess = Meganess::MegaY
                }
            }
            Primal => self.meganess = Meganess::Primal,
            Kantonian => {}
            Johtoan => {}
            Hoennese => {}
            Sinn => {}
            Unovan => {}
            Kalosian => {}
            Alolan => {}
            Galarian => {}
            Shadow => self.prefix = "Shadow",
            Imaginary => {
                self.prefix = "Imaginary";
                self.level = Level::Imaginary(rng.gen_range(1..=100));
            }
            Complex => {
                self.prefix = "Complex";
                self.level = Level::Complex(rng.gen_range(1..=100), rng.gen_range(1..=100));
            }
            Delta => self.delta = true,
            Dark => self.prefix = "Dark",
            Light => self.prefix = "Light",
            Giant => self.prefix = "Giant",
            Pink => self.prefix = "Pink",
            Feral => self.prefix = "Feral",
            Ex => {}
            Prime => {}
            Civilized => self.prefix = "Civilized",
            Baby => {
                self.prefix = "Baby";
                self.level = Level::Real(rng.gen_range(1..=9));
            }
            Omnipotent => {
                self.prefix = "Omnipotent";
                self.level = Level::Infinity;
            }
            Plushie => {}
            Toy => {}
            Shiny => self.shiny = true,
            Pokerus => {}
        })
    }
}

impl<'a> Display for Mon<'a> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        if self.prefix.is_empty() && !self.shiny && self.meganess == Meganess::Normal {
            f.write_str("Wild ")?;
        }

        if !self.prefix.is_empty() {
            write!(f, "{} ", self.prefix)?;
        }

        if self.shiny {
            f.write_str("Shiny ")?;
        }

        if self.meganess != Meganess::Normal {
            write!(f, "{} ", self.meganess)?;
        }

        f.write_str(&self.name)?;

        if self.delta {
            f.write_str("-δ")?;
        }

        if !self.meganess.suffix().is_empty() {
            write!(f, " {}", self.meganess.suffix())?;
        }

        f.write_str(&self.gender.symbol())?;
        write!(f, " (lv{})", self.level)
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

fn apply_tags<R: Rng + ?Sized>(rng: &mut R, tags: &[SpeciesTag], modifiers: &mut Vec<Modifier>) {
    use SpeciesTag::*;
    tags.iter().for_each(|tag| match tag {
        Mega => {
            if rng.gen_ratio(1, 5) {
                modifiers.push(Modifier::Mega)
            }
        }
        MegaXY => {
            if rng.gen_ratio(1, 5) {
                modifiers.push(Modifier::MegaXY)
            }
        }
        Primal => {
            if rng.gen_ratio(1, 5) {
                modifiers.push(Modifier::Primal)
            }
        }
        Kantonian => {}
        Johtoan => {}
        Hoennese => {}
        Sinn => {}
        Unovan => {}
        Kalosian => {}
        Alolan => {}
        Galarian => {}
    });
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
        name: name.into(),
        gender,
        level,
        modifiers: Vec::new(),
        prefix: "",
        suffix: "",
        shiny: false,
        delta: false,
        pokerus: false,
        meganess: Meganess::Normal,
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

    apply_tags(rng, &species.tags, &mut mon.modifiers);
    mon.apply_modifiers(rng);

    let mut mon_str = mon.to_string();

    if !opts.whitespace {
        mon_str = mon_str.replace(" ", "_")
    }

    mon_str
}
