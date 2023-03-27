import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import postService from './postService'
import {extractErrorMessage} from '../../utils'

const initialState = {
    posts: null,
    post: null,
}

// Create new post
export const createPost = createAsyncThunk('/posts/create', async(postData, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().users.user.token
        return await postService.createPost(postData, token)
    } catch(error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

// Get posts
export const getPosts = createAsyncThunk('/posts/getAll', async(_, thunkAPI) =>{
    try{

        return await postService.getPosts()
    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

// Get user post
export const getPost = createAsyncThunk('/posts/get', async(postId, thunkAPI) =>{
    try{
        return await postService.getPost(postId)
    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const updatePost = createAsyncThunk('/edit', async(updatedPost, thunkAPI) =>{
    try {
        const token = thunkAPI.getState().users.user.token
        return await postService.updatePost(updatedPost, token)
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const deletePost = createAsyncThunk('/delete', async(postId, thunkAPI) =>{
    try {
        const token = thunkAPI.getState().users.user.token
        return await postService.deletePost(postId, token)
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

export const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getPosts.pending, (state) => {
           state.post = null
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        .addCase(getPost.fulfilled, (state,action) =>{
            state.post = action.payload
        })
        .addCase(createPost.fulfilled, (state, action)=>{
            state.post = action.payload
        })
        .addCase(updatePost.fulfilled, (state, action)=>{
            const updatedPost = action.payload;
            state = {
              ...state,
              posts: state.posts.map((post) => {
                return post._id === post._id ? { ...post, ...updatedPost} : post;
              }),
            };
        })
        .addCase(deletePost.fulfilled, (state, action)=>{
            state.posts.filter((post) => {
                  return post._id !== action.payload
                })
              }
        )
    },
})

export default postSlice.reducer