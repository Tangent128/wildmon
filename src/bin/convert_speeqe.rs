
extern crate serde;
extern crate serde_json;
extern crate serde_yaml;

extern crate wildmon;

use std::fs::File;
use std::io::{ stdout, Write };
use wildmon::*;

fn main() {
    let speeqe_file = File::open("src/data/speeqe.json").expect("Couldn't find data file");
    let speeqe_data: Vec<SpeeqeFormat> = serde_json::from_reader(&speeqe_file).expect("Couldn't parse data file");

    let species_list: Vec<Species> = speeqe_data.into_iter().map(|speeqe_item| Species {
        names: speeqe_item.0,
        gender_ratio: speeqe_item.1,
        tags: vec![]
    }).collect();

    serde_yaml::to_writer(stdout(), &species_list).expect("Couldn't write to stdout");
    stdout().write_all(b"\n").expect("Couldn't write to stdout");
}
