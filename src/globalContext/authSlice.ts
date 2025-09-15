'use client'
import {createSlice} from '@reduxjs/toolkit'
import { object } from 'motion/react-client'

type Auth = Readonly<{
    status:boolean,
    userData:object|null
}>
const initialState:Auth ={
    status:false,
    userData:null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,actions)=>{
            state.status=actions.payload.status
            
        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer
