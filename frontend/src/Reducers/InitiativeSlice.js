// InitiativeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    initiativeData: [],
    status: 'idle'
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
);

export const voteInitiative = createAsyncThunk(
    "initiative/voteInitiative",
    async ({ initiativeId, userId }) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/api/initiatives/vote/${initiativeId}`,
                { userId }
            );
            return response.data;
        } catch (error) {
            console.log("Error " + error);
        }
    }
);

export const addInitiative = createAsyncThunk(
    "initiative/addInitiative",
    async (initiativeData) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/api/initiatives',
                initiativeData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            return response.data;
        } catch (error) {
            console.log("Error " + error);
        }
    }
);

export const commentInitiative = createAsyncThunk(
    "initiative/commentInitiative",
    async ({ initiativeId, userId, comment }) => {
        try {
            const response = await axios.post(
                `http://localhost:3000/api/initiatives/comment/${initiativeId}`,
                { userId, comment }
            );
            return { initiativeId, comment: response.data.comment };
        } catch (error) {
            console.log("Error " + error);
        }
    }
);

const InitiativeSlice = createSlice({
    name: "initiative",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitiative.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.initiativeData = action.payload;
            })
            .addCase(voteInitiative.fulfilled, (state, action) => {
                const { initiativeId, voteCount, likedBy } = action.payload;
                const initiative = state.initiativeData.find(item => item._id === initiativeId);
                if (initiative) {
                    initiative.voteCount = voteCount;
                    initiative.likedBy = likedBy;
                }
            })
            .addCase(fetchInitiative.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchInitiative.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(addInitiative.fulfilled, (state, action) => {
                state.initiativeData.push(action.payload);
            })
            .addCase(addInitiative.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(commentInitiative.fulfilled, (state, action) => {
                const { initiativeId, comment } = action.payload;
                const initiative = state.initiativeData.find(item => item._id === initiativeId);
                if (initiative) {
                    initiative.comments.push(comment);
                    initiative.commentCount = initiative.comments.length;
                }
            });
    }
});

export default InitiativeSlice.reducer;
