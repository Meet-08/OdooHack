import { configureStore } from '@reduxjs/toolkit'
import SchemeReducer from '../Reducers/SchemeSlice'


export const store = configureStore({
    reducer: {
        schemes: SchemeReducer
    },
})
