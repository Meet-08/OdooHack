import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    initiativeData: [],
};


export const fetchInitiative = createAsyncThunk(
    'initiative/fetch',
    async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/initiatives/");
            return data;
        } catch (error) {
            console.log("Error " + error);
        }
    }
)

export const voteInitiative = createAsyncThunk("initiative/voteInitiative", async ({ initiativeId, userId }) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/initiatives/vote/${initiativeId}`, { userId });
        return response.data;
    } catch (error) {
        console.log("Error " + error);
    }
});

const InitiativeSlice = createSlice({
    name: "Initiative",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitiative.fulfilled, (state, action) => {
                state.initiativeData = action.payload;
            })
            .addCase(voteInitiative.fulfilled, (state, action) => {
                const { initiativeId, voteCount, likedBy } = action.payload;
                const initiative = state.initiativeData.find(item => item._id === initiativeId);
                if (initiative) {
                    initiative.voteCount = voteCount;
                    initiative.likedBy = likedBy;
                }
            });
    }
});

export default InitiativeSlice.reducer;
