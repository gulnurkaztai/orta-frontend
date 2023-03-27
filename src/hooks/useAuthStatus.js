import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkLoading, setCheckLoading] = useState(true)

  const {user} = useSelector((state)=>state.auth)
  useEffect(()=>{
    if(user){
        setLoggedIn(true)
    } else{
        setLoggedIn(false)
    }
    setCheckLoading(false)
  },[user])


  return {loggedIn, checkLoading}
}
export default useAuthStatus;