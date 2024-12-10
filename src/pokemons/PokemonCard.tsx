"use client"
import Link from "next/link";

import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { SimplePokemon } from "./interfaces/simple-pokemon";
import { togglefavorite } from "@/store/pokemons/pokemonsSlice";

interface Props {
  pokemon: SimplePokemon;
}
const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  //esto es par hacer el cambio de favoritos 
  const isFavorite = useAppSelector(state =>!!state.pokemons[id]) // la doble negacion hace que devuelva un booleano
const dispatch = useAppDispatch()


  //funcion para alternar favoritos
  const toggleFavorite = () => {
    dispatch( togglefavorite(pokemon) )
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className=" flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}

          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize"> {name} </p>

          <div className="mt-5">
            <Link href={`/dashboard/pokemons/${ name }`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Mas Información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
          onClick={toggleFavorite} //funcionde cambio a favoritos
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
          >
            <div className="text-red-600">
              {
                isFavorite ?  (<IoHeart/>) :(<IoHeartOutline/>) 
              }
           
            
            </div>
            <div className="pl-3 ">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {
                  isFavorite ? "Es favorito": "No es favorito"
                }
              </p>
              <p className="text-xs text-gray-500">Agregar a favoritos</p>
            </div>
          </div> 
        
        </div>

      </div>
    </div>
  );
};

export default PokemonCard;
