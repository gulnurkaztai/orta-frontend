import axios from 'axios'

const API_URL = '/api/posts/'

const likePost = async(user, postId,  token)=>{
    const config={
        headers: {
            Authorization: `Bearer ${token}`
        }
    }



    console.log("service")
    console.log(postId)
    const response = await axios.put(API_URL+postId+'/likes', {likeAuthor: user}, config)
    console.log("response")
    console.log(response.data)
    return response.data
}




const likeService = {
    likePost
}

export default likeService;