import {FaArrowCircleLeft} from 'react-icons/fa'
import {  useNavigate } from 'react-router-dom'

const BackButton = ({url}) => {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(-1)}> 
      <FaArrowCircleLeft/> Back
    </button>
  )
}
export default BackButton