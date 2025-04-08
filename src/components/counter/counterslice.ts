import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface CounterState{
    value:number
}

//initial state
const initialState: CounterState={
    value:0,
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
    //implement reducer actions
    }

})
// eslint-disable-next-line no-empty-pattern
export const {/*export reducer actions*/}=counterSlice.actions;
export default counterSlice.reducer

