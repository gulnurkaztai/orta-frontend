import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts} from '../features/posts/postSlice'
import Spinner from '../components/spinner/Spinner'
import BackButton from '../components/backbutton/BackButton'
import PostItem from '../components/layout/PostItem'
import { Link } from 'react-router-dom'
import Tabs from '../components/layout/Tabs'



const Posts = () => {
   const {posts} = useSelector((state)=>state.posts)
  //  console.log(posts)
   const dispatch = useDispatch()

   useEffect(() => {
        dispatch(getPosts())
   }, [dispatch])

   if(!posts){
    return <Spinner/>
   }

  return (
    <div className='flex h-screen flex-col overflow-y-scroll'>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className='space-y-2 pt-6 pl-6 pb-8 md:space-y-5'>
          <Tabs/>
          <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
          {posts.map((post)=>(
            <PostItem key={post._id} post={post}/>
            ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto my-auto">

        </div>
    </div>
  )
}
export default Posts