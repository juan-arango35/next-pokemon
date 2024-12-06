import PokemonGrid from "@/pokemons/components/PokemonGrid";
import { PokemonsResponse } from "@/pokemons/interfaces/pokemons-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";




export const metadata = {
  title: "151 pokemons",
  description: "Esta es la pagina de prueba como seria las pokemones",
}
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
  /*   throw new Error("Esto es un error que no deberia suceder") */
  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>Estatico</small>{" "}
      </span>
      <PokemonGrid pokemons={pokemons}  />
    </div>
  );
};

export default PokemonsPage;
