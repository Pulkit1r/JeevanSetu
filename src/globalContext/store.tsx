"use client"
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import React from 'react'
import { Provider } from "react-redux"; 
export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})
export default function ReduxProvider({ children }:{children:React.ReactNode}) {
    return <Provider store={store}>{children}</Provider>
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
    
