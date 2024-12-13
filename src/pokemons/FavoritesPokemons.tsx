"use client";

import { useAppSelector } from "@/store";
import PokemonGrid from "./PokemonGrid";
import { useState } from "react";

import { IoHeartOutline } from "react-icons/io5";

const FavoritesPokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState(favoritePokemons);

  return (
    /*   <PokemonGrid  pokemons={favoritePokemons}/> */
    <>
      {pokemons.length ===0 ? <NoFavoritos /> : <PokemonGrid pokemons={pokemons} />}
    </>
  );
};

export default FavoritesPokemons;

export const NoFavoritos = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-600" />
      <span>No tienes pokemons favoritos</span>
    </div>
  );
};
