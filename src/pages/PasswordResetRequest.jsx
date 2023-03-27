import {toast} from 'react-toastify'
import {useState, } from 'react'
import {resetPasswordRequest} from '../features/auth/authSlice'
import Spinner from '../components/spinner/Spinner'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {FaRegEnvelope} from 'react-icons/fa'


const PasswordResetRequest = () => {
    const [email, setEmail] = useState("")
    
      const dispatch = useDispatch()
      const navigate = useNavigate()
    
      const {isLoading} = useSelector((state)=>state.users)
    
    
      const onChange = (e) => {
        setEmail((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPasswordRequest(email))
        .unwrap()
        .then(()=>{
          toast.success("The link for reset was sent to your email")
          navigate('/')
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
            Qūpia sözdı qaita jükteu
            </h1>
          </div>



        <div className='flex flex-col items-center justify-center mb-3'>

          <form onSubmit={onSubmit}>

            <div className='font-display bg-gray-100  p-2 flex  rounded-2xl  mb-5'>
              <FaRegEnvelope className='text-gray-400 m-2'/>
              <input
                type='email'
                className='w-full bg-gray-100 outline-none text-sm flex-1 '
                id='email'
                name='email'
                onChange={onChange}
                placeholder='Enter your email'
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
export default PasswordResetRequest