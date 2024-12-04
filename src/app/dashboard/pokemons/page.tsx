import PokemonGrid from "@/app/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/app/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";
import Image from "next/image";

const getPokemons = async (
  limit = 200,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((data) => data.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

const PokemonsPAge = async () => {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokemons <small>Estatico</small> </span>
      <PokemonGrid pokemons={pokemons}/>
      
    </div>
  );
};

export default PokemonsPAge;
