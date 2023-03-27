import defaultAvatar from '../assets/defaultAvatar.png'

const UserItem = ({user}) => {
  return (
   <div className="flow-root overscroll-y-auto">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src={user.avatarPic || defaultAvatar} alt={user.name}/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {user.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.bio}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base text-gray-900 dark:text-white">
                        +
                    </div>
                </div>
            </li>
        </ul>
   </div>


  )
}
export default UserItem