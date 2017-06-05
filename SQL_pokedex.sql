DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE pokemon;

CREATE TABLE pokedex (
  number INTEGER PRIMARY KEY,
  name TEXT,
  species TEXT,
  primary_type TEXT,
  secondary_type TEXT,
  pokedexX TEXT,
  pokedexY TEXT,
  pokedexOR TEXT,
  pokedexAS TEXT
)
-- copy full path here
COPY pokedex (number, name, species, primary_type, secondary_type, pokedexX, pokedexY, pokedexOR, pokedexAS) FROM '/Users/admin/LGprojects/parsimonious-hyrax/mutably-starter/data/standard_xy_pokemon3.csv' DELIMITER ',' CSV HEADER;
