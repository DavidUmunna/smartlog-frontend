import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'  // we'll create this next

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})

// Infer RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
