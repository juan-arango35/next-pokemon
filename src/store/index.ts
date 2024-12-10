import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter/counterSlice"//importamos de conunterslice 
import { useDispatch,useSelector } from 'react-redux';
import pokemonsReducer from "./pokemons/pokemonsSlice"


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    pokemons: pokemonsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



//
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()//para disparar acciones 
export const useAppSelector = useSelector.withTypes<RootState>() // para escuchar y leer nuestro store