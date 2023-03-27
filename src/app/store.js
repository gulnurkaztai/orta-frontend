import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import postReducer from '../features/posts/postSlice'
import commentReducer from '../features/comments/commentSlice'
import likeReducer from '../features/likes/likeSlice'

export const store = configureStore({
  reducer: {
    users: authReducer,
    posts: postReducer,
    comments: commentReducer,
    likes: likeReducer
  },
});
