import {toast} from 'react-toastify'
import {useState, } from 'react'
import {resetPassword} from '../features/auth/authSlice'
import Spinner from '../components/spinner/Spinner'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {BiLock} from 'react-icons/bi'


const PasswordReset = () => {
    const [password, setPassword] = useState("")
    
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const {token, user_id}= useParams()
    
      const {isLoading} = useSelector((state)=>state.users)
    
    
      const onChange = (e) => {
        setPassword((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            password,
            token,
            user_id
          };
        dispatch(resetPassword(data))
        .unwrap()
        .then(()=>{
          toast.success("Your password was reset successfully")
          navigate('/login')
        })
        .catch(toast.error)
      }
    
      if(isLoading) {
        return <Spinner/>
      }
  return (
    <>
    <div className='flex flex-col items-center justify-center w-full flex-1 mt- text-center text-gray-800'>
      <div className='bg-white rounded-2xl shadow-2xl shadow-green-300 flex flex-row  -mt-40'>

        <div className='w-full p-5 px-3'>
          <div className='py-5 '>
            <h1 className='font-display font-semibold text-2xl'>
            Jana Qūpia Söz
            </h1>
          </div>
        <div className='flex flex-col items-center justify-center mb-3'>

          <form onSubmit={onSubmit}>
            <div className='font-display bg-gray-100  p-2 flex items-center rounded-2xl mb-1'>
            <BiLock className='text-gray-400 m-2'/>
                <input
                type="password"
                className="w-full bg-gray-100 outline-none  flex-1 "
                id="password"
                name="password"
                onChange={onChange}
                placeholder="Create a new password"
                required
                />
            </div>
            <div className='font-display bg-gray-100  p-2 flex items-center rounded-2xl mb-3'>
            <BiLock className='text-gray-400 m-2'/>
                <input
                type="password"
                className="w-full bg-gray-100 outline-none  flex-1 "
                id="password2"
                name="password2"
                onChange={onChange}
                placeholder="Confirm your new password"
                required
                />
            </div>
            <button className=" bg-green-200 py-2 px-9 font-display text-gray-900  hover:bg-gray-800 hover:text-white rounded-xl transition duration-300 uppercase">qaita jükte</button>
          </form>

        </div>



        </div>
      </div>
    </div>
    </>
  )
}
export default PasswordReset