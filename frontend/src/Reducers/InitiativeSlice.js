import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    init: []
}

export const fetchInitiative = createAsyncThunk(
    'initiative/fetch',
    async () => {
        const { data } = await axios.get("http://localhost:3000/api/initiatives/");
        return data;
    }
)

const InitiativeSlice = createSlice({
    name: "Initiative",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchInitiative.fulfilled, (state, action) => {
            state.init = action.payload;
        });
    }
});

export default InitiativeSlice.reducer;
