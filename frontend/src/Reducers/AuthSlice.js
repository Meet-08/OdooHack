import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.withCredentials = true

export const loginUser = createAsyncThunk("auth/login", async (userData) => {
    try {
        const { data } = await axios.post("http://localhost:3000/api/auth/login", userData);
        return data.user;
    } catch (error) {
        console.log(error);
    }
});

export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
    try {
        const { data } = await axios.get("http://localhost:3000/api/auth/me");
        return data.user;
    } catch (error) {
        console.log(error);
    }
});

export const logoutUser = createAsyncThunk("auth/logout", async () => {
    await axios.post("http://localhost:3000/api/auth/logout");
    return null;
});

export const updateProfilePic = createAsyncThunk("auth/updateProfilePic", async (pic) => {
    try {
        const { data } = await axios.put("http://localhost:3000/api/auth/update-profile-pic", pic);
        return data.user;
    } catch (error) {
        console.log(error);
    }
})

const AuthSlice = createSlice({
    name: "Auth",
    initialState: { user: null, status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder.
            addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.error.message
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.error = action.error.message
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.error = action.error.message
            })
            .addCase(logoutUser.pending, (state) => {
                state.status = "loading"
            })
            .addCase(updateProfilePic.fulfilled, (state, action) => {
                state.user = action.payload
            })
            .addCase(updateProfilePic.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
})

export default AuthSlice.reducer;
