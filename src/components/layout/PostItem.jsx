import {Link} from 'react-router-dom'


const PostItem = ({post}) => {
  return (
    <li className="py-10 font-display">
            <article>
              <div className="space-y-2 ">
                <dl>
                  <dd className='text-gray-500'>
                    <time>{new Date(post.createdAt).toLocaleString('en-US')}</time>
                  </dd>
                </dl>
                <div className='space-y-5 xl:col-span-3'>
                  <div className='space-y-6'>
                    <div>
                      <h2 className='text-2xl font-bold leading-8 tracking-tight'>
                        <Link to={`/posts/${post._id}`}></Link>{post.title}
                      </h2>

                    </div>

                    <div className='prose max-w-none text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'>
                     {/* Since the error happens just before the API call is made, use optional chaining (?.) to check whether the string to be truncated is available yet */}
                     {post.text?.substring(0,100)}...
                    </div>
                  </div>
                  <div className='text-base font-medium leading-6'>
                    <Link to={`/posts/${post._id}`} className='text-black-100 dark:text-gray-300 hover:text-white dark:hover:text-white'>Read more -></Link>
                  </div>
                </div>
              </div>
            </article>
            </li>
  )
}
export default PostItem

