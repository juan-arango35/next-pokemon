import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "../../pokemons/interfaces/simple-pokemon";

/*
vamos a tratar de colocar de est forma a los pokemones para hacer que sean favoritos encontrarlos y borrarlos o hacer algo con ellos

{
"1":{id:1,name:"pikachu"},
"2":{id:2,name:"charmander"},
"3":{id:3,name:"squirtle"}
}
*/

interface PokemonStateFavorites {
  [key: string]: SimplePokemon;
}

const initialState: PokemonStateFavorites = {
  "1": { id: "1", name: "bulbasaur" }, // valor inicial por defecto
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    togglefavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    },
  },
});

export const { togglefavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
