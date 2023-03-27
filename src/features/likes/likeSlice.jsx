import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import likeService from '../likes/likeService'
import { extractErrorMessage } from '../../utils'

const initialState = {
    likes: [],
    like: null
}

export const likePost = createAsyncThunk('likes', async({user, postId}, thunkAPI) =>{
    try{
        const token = thunkAPI.getState().users.user.token
        console.log("thunk")
        console.log(postId)

        return await likeService.likePost(user, postId, token)

    } catch (error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})


export const likeSlice = createSlice({
    name: 'likes',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(likePost.fulfilled, (state, action)=>{
            state.likes.push(action.payload);
        })
        .addCase(likePost.rejected, (state)=>{
            console.log(state)
        })
    }

})

export default likeSlice.reducer