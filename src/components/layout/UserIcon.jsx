import {FiMail} from 'react-icons/fi'
import {MdOutlineNotificationsNone} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {logout, reset} from '../../features/auth/authSlice'
import Profile from '../../pages/Profile'
import defaultAvatar from '../assets/defaultAvatar.png'


const UserIcon = () => {
    const {user} = useSelector((state)=>state.users)
    const {_id, avatarPic} = user
    const [userMenu, setUserMenu] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = ()=>{
      dispatch (logout())
      navigate('/')
    }

  return (
    <div className='flex flex-row w-32 items-center relative ml-10'>
        <FiMail className='basis-1/3 w-6 h-6'/>
        <MdOutlineNotificationsNone className='basis-1/3 w-6 h-6'/>

        <img 
          className="w-10 h-10 rounded-full basis-1/3"
          src={avatarPic || defaultAvatar} 
          alt="avatar" 
          onClick={(e)=>setUserMenu(!userMenu)}
          data-dropdown-toggle="dropdownId"
          />


    <div id="dropdown" className={`${userMenu? "block" : "hidden"} absolute right-0 top-10 bg-white  rounded-lg shadow w-32 dark:bg-gray-700`} >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 font-display">
        <li>
            <Link to={`/${_id}/me`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
        </li>
          <li>
              <button className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-display' onClick={onLogout}>
                Logout
              </button>
            </li>
        </ul>
    </div>
    </div>
  )
}
export default UserIcon