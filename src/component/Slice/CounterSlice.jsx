import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data; // Return the fetched posts
});

export const counterslice = createSlice({
    name: "counter",
    initialState: {
        value:0,
        posts: [],
        status: "idle",
        error: null
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "Loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Set succeeded state
                state.posts = action.payload; // Store fetched posts
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'; // Set failed state
                state.error = action.error.message; // Store error message
            })
    }
})

export const { increment, decrement, incrementByAmount } = counterslice.actions;
export default counterslice.reducer;