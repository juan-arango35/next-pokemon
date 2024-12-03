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
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
            pokemons.map((item, id)=>(
                <div>
                   <span>{item.name}</span>
                    <Image
                    key={id}
                    alt={item.name}
                      width={100}
                      height={100}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                    />
                </div>

            ))
        }
      </div>
    </div>
  );
};

export default PokemonsPAge;
