import { useState} from "react"
import {  useDispatch, useSelector } from "react-redux"
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import {updatePost} from '../features/posts/postSlice'



const EditPost = () => {
    const {post} = useSelector((state)=>state.posts)
    const {postId} = useParams()
    const [article, setArticle] = useState({post})


const {title, text} = article;
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChange = (e) => {
        setArticle((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

    const onSubmit = async (e) => {
        e.preventDefault()
        const updatedPost = {title, text}
        dispatch(updatePost({postId, ...updatedPost}))
        .unwrap()
        .then(() => {
          toast.success('Jazbañyz jañartyldy!')
          navigate(`/`)
        })
        .catch(toast.error)
        
    }

  return (
    <div className='py-12'>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className=" overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6  border-gray-200">
                <form onSubmit={onSubmit}>

                        <div className='font-display mb-4'>
                            <label className="block mb-2 text-sm font-medium text-gray-100 dark:text-white">Taqyryp <span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                id="title"
                                name="title"
                                defaultValue={post.title}
                                onChange={onChange}
                                placeholder="Taqyryp"
                                required
                            />
                        </div>
                        <div className='font-display mb-8'>
                            <label className="text-l text-gray-100">Mätın<span className="text-red-500">*</span></label>
                                <textarea
                                    rows="18"
                                    type="text"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                    id="text"
                                    name="text"
                                    defaultValue={post.text}
                                    onChange={onChange}
                                    placeholder="Oqiğañyzben bölısıñız... Basqalardy şabyttandyryñyz"
                                    required
                                />
                        </div>
                        <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-gray-900 bg-green-200 rounded-lg hover:bg-green-400  font-display uppercase">Jañartu</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default EditPost