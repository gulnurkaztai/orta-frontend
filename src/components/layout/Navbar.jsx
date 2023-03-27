import {Link} from 'react-router-dom'
import Logo from './Logo'
import { useSelector} from 'react-redux'
import {FiMenu} from 'react-icons/fi'
import {useState} from 'react'
import {BsToggleOn} from 'react-icons/bs'
import UserIcon from './UserIcon'

const Navbar = () => {

  const {user} = useSelector((state) => state.users)
  const [open, setOpen] = useState(false)


  return (
    <>

<nav className=" bg-gray-900  text-gray-200" >
  <div className="flex items-center justify-between xl:max-w-9xl xl:mx-auto mx-w-full px-[5%] flex-wrap w-full">

      <div className='flex'>
        <Link to="/" className="flex items-center space-x-4 py-5">
          <div>
            <Logo />
          </div>
            <div className='hidden md:flex flex-col hover:text-white'>
              <span className="py-1 font-display">ORTA</span>
              <span className="py-1 font-display">Bılımge qūştar bol</span>
            </div>
        </Link>
      </div>
      {user ? (
        <>
        <div className='flex'>
          <Link to='/create' >
             <button className="px-3 py-2 font-display text-gray-900 bg-green-200 shadow-lg shadow-green-200/50 hover:bg-green-300 hover:text-black rounded-xl transition duration-300 " >JANA JAZBA</button>
          </Link>
          <UserIcon/>
          </div>
         </>) : (
            <>
              <FiMenu className='md:hidden block h-6 w-6 cursor-pointer' onClick={()=>setOpen(!open)}/>
              <nav className={`${open? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
                <div className='text-base flex justify-between items-center'>
                  <Link to='/login' className="md:py-5 px-3 block font-display hover:text-white">KIRU</Link>
                  <Link to='/register' className="md:py-2 px-3 block font-display text-gray-900 bg-green-200 hover:bg-green-300 hover:text-black rounded-xl transition duration-300 uppercase">tırkelu</Link>
                  {/* <button aria-label='Toggle Dark Mode' type='button' className='ml-1 mr-1 h-8 w-8 p-1 sm:ml-4'><BsToggleOn/></button> */}
                </div>
              </nav>
            </>
            )}
  </div>
</nav>
</>
  )
}
export default Navbar