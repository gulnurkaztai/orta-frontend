import LeftSidebar from "../components/layout/LeftSidebar"

import RightSidebar from "../components/layout/RightSidebar"
import Posts from "./Posts"

const Home = () => {
  return (
    <div className='px-6 py-8 bg-gray-900 text-gray-200'>
            <div className="flex justify-between container mx-auto">
                <LeftSidebar/>
                <div className="w-full lg:w-8/12 bg-gray-800 rounded-2xl">
                    <Posts/>
                </div>
                <RightSidebar/>
            </div>
    </div>
  )
}
export default Home