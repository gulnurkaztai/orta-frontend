import {FaGoogle} from 'react-icons/fa'
import {useState} from 'react'
import jwtDecode from 'jwt-decode'
import {toast} from 'react-toastify'
import { register, updateProfile, login} from '../../features/auth/authSlice'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const GoogleLogin = () => {
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleResponse = (response)=>{
    const token = response.credential
    const decodedToken = jwtDecode(token)
    const {sub: id, email, name, picture: avatarPic} = decodedToken
    dispatch(register({id, email, name, token, picture: avatarPic}))
    .unwrap()
    .then((user)=>{
      toast.success(`Welcome, ${user.name}`)
      navigate('/')
    })
    .catch(toast.error)
  }
  
  const handleGoogleLogin = () =>{
    try {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        auto_select: true,
        callback: handleResponse,
      });
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed()) {
          throw new Error('Try to clear the cookies or try again later!');
        }
        if (
          notification.isSkippedMoment() ||
          notification.isDismissedMoment()
        ) {
          setDisabled(false);
        }
      });
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <button className=''  onClick={handleGoogleLogin}>
      <FaGoogle/>
    </button>
  )
}
export default GoogleLogin