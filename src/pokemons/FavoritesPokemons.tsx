"use client"

import { useAppSelector } from "@/store"
import PokemonGrid from "./PokemonGrid"


const FavoritesPokemons = () => {
    const favoritePokemons=useAppSelector(state =>Object.values(state.pokemons))
   console.log(favoritePokemons)
  return (
   <PokemonGrid  pokemons={favoritePokemons}/>
  )
}

export default FavoritesPokemons