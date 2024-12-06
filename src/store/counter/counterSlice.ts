import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 5,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { //son la acciones que yo quiero hacer
    addOne(state){
        state.value ++;
    },
    sustractOne(state){
        if(state.value ===0 ) return
        state.value --;
    },
    resetCounter(state, action: PayloadAction<number>){
        if(action.payload < 0) action.payload = 0
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addOne,sustractOne ,resetCounter} = counterSlice.actions

export default counterSlice.reducer // esto es el counterReducer importado en index del store