import { Pokemon } from "@/pokemons/interfaces/pokemon";
import { Metadata } from "next";


interface Props {
  params: { id: string };
}


export async function generateMetadata({params}:Props):Promise<Metadata> {
  const pokemon = await getPokemon(params.id)
  const {id, name}= pokemon
  return {
    title:`${id} - ${name}`,
    description:`Esta es la pagina de ${name}`
  }
  
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
  return <div> 

    <h2>{pokemon.name}</h2>
  </div>;
};

export default PokemonPage;

//me quede en el video de metadata dianimca