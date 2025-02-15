import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true;
const API_URL = "http://localhost:3000/api";

const initialState = {
    initiativeData: [],
    status: 'idle',
    error: null,
};

export const fetchInitiative = createAsyncThunk(
    'initiative/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${API_URL}/initiatives/`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const voteInitiative = createAsyncThunk(
    'initiative/voteInitiative',
    async ({ initiativeId, userId }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`${API_URL}/initiatives/vote/${initiativeId}`, { userId });
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const addInitiative = createAsyncThunk(
    'initiative/addInitiative',
    async (initiativeData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `${API_URL}/initiatives/`,
                initiativeData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            return data.initiative;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const commentInitiative = createAsyncThunk(
    'initiative/commentInitiative',
    async ({ initiativeId, userId, comment }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                `${API_URL}/initiatives/comment/${initiativeId}`,
                { userId, comment }
            );
            const newComment = data.comments ? data.comments[data.comments.length - 1] : data.comment;
            return { initiativeId, comment: newComment };
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const initiativeSlice = createSlice({
    name: 'initiative',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitiative.fulfilled, (state, action) => {
                state.initiativeData = action.payload;
                state.status = 'succeeded';
            })
            .addCase(voteInitiative.fulfilled, (state, action) => {
                const { initiativeId, voteCount, likedBy } = action.payload;
                const initiative = state.initiativeData.find(item => item._id === initiativeId);
                if (initiative) {
                    initiative.voteCount = voteCount;
                    initiative.likedBy = likedBy;
                }
                state.status = 'succeeded';
            })
            .addCase(addInitiative.fulfilled, (state, action) => {
                state.initiativeData.unshift(action.payload);
                state.status = 'succeeded';
            })
            .addCase(commentInitiative.fulfilled, (state, action) => {
                const { initiativeId, comment } = action.payload;
                const initiative = state.initiativeData.find(item => item._id === initiativeId);
                if (initiative) {
                    initiative.comments = initiative.comments ? [...initiative.comments, comment] : [comment];
                    initiative.commentCount = initiative.comments.length;
                }
                state.status = 'succeeded';
            })
            .addMatcher(
                (action) => action.type.endsWith('/pending'),
                (state) => {
                    state.status = 'loading';
                    state.error = null;
                }
            )
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.payload || action.error.message;
                }
            );
    }
});

export default initiativeSlice.reducer;
