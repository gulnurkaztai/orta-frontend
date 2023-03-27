import axios from 'axios'

const API_URL = '/api/posts/'


const createComment = async(commentText, postId, token) => {
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+postId+'/comments', {text: commentText, post_id: postId}, config)
    console.log(commentText)
    return response.data
}


const commentService = {
    createComment,

}

export default commentService;