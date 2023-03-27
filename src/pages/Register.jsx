import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { register} from '../features/auth/authSlice';
import Spinner from '../components/spinner/Spinner';
import { Link } from 'react-router-dom'
import {FaGithub, FaFacebook, FaGoogle, FaRegEnvelope, FaRegUserCircle} from 'react-icons/fa'
import {BiLock} from 'react-icons/bi'
import GoogleLogin from '../components/user/GoogleLogin';
 
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
 
  const { isLoading} = useSelector(
    (state) => state.users
  );
 
  const { name, email, password, password2 } = formData;
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
 
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
 
  const onSubmit = (e) => {
    e.preventDefault();
 
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };
 
      dispatch(register(userData))
      .unwrap()
      .then((user)=>{
        toast.success(`Salem, ${user.name}`)
        navigate('/')
      })
      .catch(toast.error)
    }
  }

  if(isLoading){
    return <Spinner/>
  }
 
  return (
    <div className='flex flex-col h-screen items-center justify-center w-full flex-1 text-center text-gray-800'>
      <div className='bg-white rounded-2xl shadow-2xl shadow-green-300 flex flex-row w-3/5 max-w-4xl'>

      <div className='w-2/5 max-[800px]:hidden bg-green-200 rounded-tl-2xl rounded-bl-2xl py-36 px-12 font-display '>
          <h2 className='text-xl max-[1000px]:text-sm font-semibold mb-16 uppercase text-gray-800' >Qaita keluıñızben!</h2>
          <p className='mb-10 text-gray-800'>Bız sızdı sağyndyq 🙃</p>
          <Link to='/login' className="block bg-white py-3 px-7 font-display text-gray-800 hover:bg-gray-800 hover:text-white rounded-xl transition duration-300 uppercase">KIRU</Link>

        </div>

        <div className='w-3/5 max-[800px]:w-full p-5'>
          <div className='py-5'>
            <h1 className='font-display font-semibold  uppercase'>
            tırkelu
            </h1>
          </div>
          <p className='font-display  mb-3'>Avtorizasiadan ötıñız</p>
 
        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center'>

        <div className='font-display bg-gray-100  p-2 flex items-center rounded-2xl  mb-1'>
            <FaRegUserCircle className='text-gray-400 m-2'/>
            <input
              type="text"
              className="w-full bg-gray-100 outline-none  flex-1"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className='font-display bg-gray-100  p-2 flex items-center rounded-2xl mb-1'>
          <FaRegEnvelope className='text-gray-400 m-2'/>
            <input
              type="email"
              className="w-full bg-gray-100 outline-none  flex-1 "
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className='font-display bg-gray-100  p-2 flex items-center rounded-2xl mb-1'>
          <BiLock className='text-gray-400 m-2'/>
            <input
              type="password"
              className="w-full bg-gray-100 outline-none  flex-1 "
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Create a password"
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
              value={password2}
              onChange={onChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button className=" bg-green-200 w-full sm:w-32 py-2 px-9 font-display text-gray-900  hover:bg-gray-800 hover:text-white rounded-xl transition duration-300 uppercase">tırkelu</button>

          </form>


          {/* log in with social media */}
          <div className='border-2  mb-2 my-4'></div>
      <p className='mb-2 font-display text-gray-400'>NEMESE </p>
        <p className='font-display text-gray-400 mb-5'>äleumettık jelıñızben kırıñız</p>
        <div className='flex justify-center '>
           <GoogleLogin className='border-2 border-gray-200 rounded-full p-3 mx-1'/>
          {/* <FaGithub className='border-2 border-gray-200 rounded-full p-3 mx-1'/>
          <FaFacebook className='border-2 border-gray-200 rounded-full p-3 mx-1'/> */}
        </div>
    </div>
    </div>
    </div>

  );
}
 
export default Register;