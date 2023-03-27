import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import commentService from '../comments/commentService'
import { extractErrorMessage } from '../../utils'

const initialState = {
    comments: [],
    comment: null
}

// Create new comment
export const createComment = createAsyncThunk('comments', async({commentText, postId}, thunkAPI)=>{
    try{
        const token = thunkAPI.getState().users.user.token
        console.log(commentText)
        console.log(postId)
        return await commentService.createComment(commentText,postId, token)

    } catch(error){
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})





export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: (builder) =>{
        builder
            .addCase(createComment.fulfilled, (state,action)=>{
                state.comments.push(action.payload)
            })
    }
})

export default commentSlice.reducer
