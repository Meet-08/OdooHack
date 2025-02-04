import { configureStore } from '@reduxjs/toolkit'
import SchemeReducer from '../Reducers/SchemeSlice'
import AuthReducer from '../Reducers/AuthSlice'

export const store = configureStore({
    reducer: {
        schemes: SchemeReducer,
        auth: AuthReducer
    },
})
