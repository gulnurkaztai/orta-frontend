import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUsers } from '../../features/auth/authSlice'
import UserItem from './UserItem'

const RightSidebar = () => {
  const {users} = useSelector((state)=>state.users)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUsers())
  }, [dispatch])
  return (
    <>
                <div className="mx-2 w-3/12 hidden lg:block font-display bg-gray-800 rounded-2xl">
                    <div className="mt-10 px-8">
                        <h1 className=" text-xl font-bold text-gray-700">Avtorlar</h1>
                        <ul>
                            {users.map((user)=>(
                          <UserItem key={user._id} user={user}/>
                        ))}
                        </ul>

                    </div>
                    <div className="mt-5 px-8">
                        <h1 className=" text-xl font-bold text-gray-700"></h1>
                        
                    </div>
                    <div className="mt-5 px-8">
                        <h1 className=" text-xl font-bold text-gray-700">Jarnama</h1>
                        
                    </div>
                </div>
    </>
  )
}
export default RightSidebar