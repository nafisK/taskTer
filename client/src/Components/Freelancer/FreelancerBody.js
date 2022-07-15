import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Helper/Context'

export default function FreelancerBody() {
  const navigate = useNavigate()
  const { resetUsers, setIsLoggedIn } = useContext(UserContext)

  return (
    <div className='w-full h-screen bg-zinc-200 '>
      <div className='grid md:grid-cols-3 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 mt-2'>
          {/* items */}
          <div className='font-bold text-xl text-red-600'>
            <h1>TASKS PUBLISHED</h1>
          </div>
          <div className='rounded overflow-hidden shadow-lg bg-white my-3 w-full'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Name of Task</div>
              <p className='text-gray-700 text-base'>Description of task</p>
              <p className='text-gray-700 text-base'>Clickable link</p>
              <p className='text-gray-700 text-base'>Contact</p>
              <p className='text-gray-700 text-base'>Due On</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center md:items-start w-full px-2 mt-2 '>
          {/* items */}
          <div className='font-bold text-xl text-orange-600'>
            <h1>IN PROGRESS</h1>
          </div>
          <div className='rounded overflow-hidden shadow-lg bg-white my-3 w-full'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Name of Task</div>
              <p className='text-gray-700 text-base'>Description of task</p>
              <p className='text-gray-700 text-base'>Clickable link</p>
              <p className='text-gray-700 text-base'>Contact</p>
              <p className='text-gray-700 text-base'>Completed</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center md:items-start w-full px-2 mt-2 '>
          {/* items */}
          <div className='font-bold text-xl text-green-600'>
            <h1>TASKS COMPLETED</h1>
          </div>
          <div className='rounded overflow-hidden shadow-lg bg-white my-3 w-full'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Name of Task</div>
              <p className='text-gray-700 text-base'>Description of task</p>
              <p className='text-gray-700 text-base'>Clickable link</p>
              <p className='text-gray-700 text-base'>Contact</p>
              <p className='text-gray-700 text-base'>Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
