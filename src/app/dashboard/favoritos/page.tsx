import FavoritesPokemons from "@/pokemons/FavoritesPokemons";
import PokemonGrid from "@/pokemons/PokemonGrid";

export const metadata = {
  title: "favoritos",
  description: "Esta es la pagina de prueba como seria las pokemones",
};

const PokemonsPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small>Global State</small>{" "}
      </span>
   {/*    <PokemonGrid pokemons={[]} /> */}
   <FavoritesPokemons/>
    </div>
  );
};

export default PokemonsPage;
