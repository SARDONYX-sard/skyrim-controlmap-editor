extern crate serde;
extern crate toml;

use controlmap_parser::parse;
use serde::{Deserialize, Serialize};
use std::fs::{read_to_string, write};

#[derive(Debug, Serialize, Deserialize)]
pub struct Config {
  pub general: General,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct General {
  pub theme: String,
  pub autosave: bool,
  pub lang: String,
}

#[tauri::command]
pub fn read_toml(path: &str) -> Result<String, String> {
  let config_content: String = read_to_string(path).expect("Failed to read config file");
  let config: Config = toml::from_str(&config_content).expect("Failed to parse config file");
  // println!("{:?}", config.general);
  let json = serde_json::to_string(&config).unwrap();
  Ok(json)
}

#[tauri::command]
pub fn write_toml(path: &str, config: Config) -> bool {
  let toml = toml::to_string(&config).expect("Failed to serialize config.");
  match write(path, toml) {
    Ok(()) => true,
    Err(_) => false,
  }
}

#[tauri::command]
pub async fn read_json(path: &str) -> Result<String, String> {
  let controlmap_str = read_to_string(path).expect("Failed to read json file");
  let string = parse(&controlmap_str).expect("Failed to parse json");
  // println!("{:?}", string);
  Ok(string)
}
