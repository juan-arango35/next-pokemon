import { Pokemon } from "@/pokemons/interfaces/pokemon";

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string):Promise<Pokemon> => {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,

    { cache: "force-cache" }
  ).then((response) => response.json());
  console.log("se cargo",pokemon.name);
  return pokemon
};
const PokemonPage = async({ params }: Props) => {
  const pokemon =await getPokemon(params.id);
  return <div>PokemonPage {JSON.stringify(pokemon, null,2 )}</div>;
};

export default PokemonPage;
