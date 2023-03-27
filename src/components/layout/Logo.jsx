import logo from '../assets/orta-logo.png'
import {useState} from 'react'

const Logo = () => {
  const [pulse, setPulse] = useState(false)

  return (
    <div>
        <img 
          src={logo} 
          className={pulse? "rounded-full ring-1 ring-green-200/50 shadow-md shadow-green-200 animate-[spin_1s_ease-in-out_1]": "rounded-full ring-1 ring-green-200/50 shadow-md shadow-green-200"}
          onClick={()=>setPulse(true)}
          onAnimationEnd={()=>setPulse(false)}
          />
    </div>
  )
}
export default Logo 