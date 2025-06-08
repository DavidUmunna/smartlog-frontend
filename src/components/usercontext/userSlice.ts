import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User{
    id:string,
    name:string,
    email:string,
    token?:string
}

interface Userstate{
    user:User|null;
}

const initialState:Userstate={
    user:null
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<User>)=>{
        state.user=action.payload
    },
    Clearuser:(state)=>{
        state.user=null
    }
}
})

export const {setUser,Clearuser} =userSlice.actions
export default userSlice.reducer