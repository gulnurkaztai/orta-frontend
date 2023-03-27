import { useSelector, useDispatch } from 'react-redux'
import { getMe, updateProfile } from '../features/auth/authSlice'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import {IoSettingsOutline} from 'react-icons/io5'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import {v4 as uuidv4} from 'uuid'
import defaultAvatar from '../components/assets/defaultAvatar.png'


const Profile = () => {

  const {user} = useSelector((state=>state.users))
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [avatarPic, setAvatarPic] = useState(user.avatarPic);
  const [settings, setSettings] = useState(false)


  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    dispatch(getMe(id)).unwrap().catch(toast.error)
  },[id,dispatch] )


  
  const onPicUpload = async (e) =>{
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setAvatarPic(base64)

  }

 
  const onSubmit = async(e) => {
    e.preventDefault();

    const updatedUser = {
      name,
      bio,
      avatarPic
    }

      dispatch(updateProfile({id, ...updatedUser}))
      .unwrap((updUser) =>{
        console.log(...updUser.avatarPic)
      })
      .catch(toast.error)
      navigate("/")
    }






  
      
  return(
    <>
    <div className='w-full px-6 md:px-16 py-6 mx-auto  text-gray-200 font-display'>
        <div className='relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words shadow-blur rounded-2xl bg-gray-700 mb-4 bg-opacity-50'>
            <div className='flex flex-wrap justify-between'>
                <div className=' w-auto max-w-full px-3'>
                    <div className='text-size-base h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition  delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-green-500 duration-200'>
                        <img src={user.avatarPic} alt='avatar pic' className='w-20 h-20 shadow-soft-sm rounded-full animate-[pulse_1s_ease-in-out_1]'/>
                        <div className='w-auto max-w-full ml-10 flex-col '>
                            <p className='py-1 ml-5'>{user.name}</p>
                            <p className='py-1 ml-5'>{user.bio}</p>

                        </div>
                    </div>

                </div>
                <div className='flex w-auto max-w-full px-3'>
                  <div className=''>
                      <button className='' onClick={()=>setSettings(!settings)}>
                          <IoSettingsOutline className='hover:animate-[spin_1s_ease-in-out_1]'/>
                      </button>
                  </div>

                </div>

            </div>
            {settings && (
          <>
          <form onSubmit={onSubmit}>
          <div className='flex flex-wrap mt-10 pl-3'>
            <div className='flex flex-col '>
              <p className='mt-4 mb-5 flex text-center w-30 pr-10'>Esımıñ</p>
              <p className='mt-3 flex text-center w-30 pr-10'>Bio</p>

            </div>
                <div className='flex flex-col ml-10'>
                    <input
                    defaultValue={name}
                      type="text"
                      className="bg-gray-900 outline-none text-sm flex-1 rounded-md font-display h-8 py-3 my-2 pl-3"
                      id="name"
                      name="name"
                      // value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="text"
                      defaultValue={bio}
                      className="bg-gray-900 outline-none text-sm flex-1 rounded-md font-display h-8 py-3 my-2 pl-3"
                      id="bio"
                      name="bio"
                      // value={bio}
                      required
                      onChange={(e) => setBio(e.target.value)}
                    />
                  {/* <label htmlFor="avatarPic"><img src={defaultAvatar} alt="" /></label> */}
                  <input
                    accept='.jpeg, .png, .jpg'
                    id='avatarPic'
                    type='file'
                    name= "avatarPic"
                    className='block w-full text-sm my-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                    onChange={onPicUpload}
                  />
                </div>
                </div>
              <div>
                  <button className="bg-green-200 py-2 px-9 font-display text-gray-900  hover:bg-gray-800 hover:text-white rounded-xl transition duration-300 uppercase">Update</button>
              </div>
            
            </form>
          </>
        )}

        </div>

    </div>
    </>
  )
}
export default Profile 

function convertToBase64(file){
  return new Promise((resolve, reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () =>{
      resolve(fileReader.result)
    }
    fileReader.onerror=(error)=>{
      reject(error)
    }
  })
}