import { React, useContext } from 'react'
import { CalendarIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './Context'

function Navbar() {
  const navigate = useNavigate()
  const { resetUsers, setIsLoggedIn } = useContext(UserContext)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg sticky top-0 z-50'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <CalendarIcon className='w-10 text-yellow-400 stroke-yellow-600 hover:stroke-cyan-700' />
          <h1 className='text-3cl font-bold mr-4 sm:text-4xl text-yellow-600 '>
            TASKTER.
          </h1>
        </div>

        <div className='hidden md:flex pr-4'>
          <button
            onClick={() => {
              resetUsers()
              setIsLoggedIn(false)
              navigate('/')
            }}
            className='relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 text-yellow-800  focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
          >
            <span className='relative px-8 py-3 transition-all ease-in duration-75 bg-white dark:bg-yellow-400 rounded-md group-hover:bg-opacity-0'>
              {/* TODO: Implement Log Out */}
              Log Out
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
