import { React, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Helper/Context'
import axios from 'axios'

export default function FreelancerBody() {
  const navigate = useNavigate()
  const { resetUsers, setIsLoggedIn } = useContext(UserContext)
  const [todoTasks, setTodoTasks] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:4000/task/')
      .then(res => {
        // handle response
        setTodoTasks(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='w-full h-screen bg-zinc-200 '>
      <div className='grid md:grid-cols-3 gap-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 mt-2 bg-red-600 rounded-lg'>
          {/* items */}
          <div className='font-bold text-xl text-white'>
            <h1>TASKS PUBLISHED</h1>
          </div>
          {todoTasks
            .filter(val => val.status === 'todo')
            .map(task => (
              <div className='rounded overflow-hidden shadow-lg bg-white my-3 w-full'>
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{task.name}</div>
                  <p className='text-gray-700 text-base'>{task.description}</p>
                  <p className='text-gray-700 text-base'>{task.links}</p>
                  <p className='text-gray-700 text-base'>{task.contact}</p>
                  <p className='text-gray-700 text-base'>{task.pay}</p>
                  <p className='text-gray-700 text-base'>{task.companyName}</p>
                  <p className='text-gray-700 text-base'>{task.dueDate}</p>
                  <p className='text-gray-700 text-base'>{task.status}</p>
                </div>
              </div>
            ))}
        </div>

        <div className='flex flex-col justify-center md:items-start w-full px-2 mt-2 bg-orange-600 rounded-lg'>
          {/* items */}
          <div className='font-bold text-xl text-white'>
            <h1>IN PROGRESS</h1>
          </div>
          {todoTasks
            .filter(val => val.status === 'doing')
            .map(task => (
              <div className='rounded overflow-hidden shadow-lg bg-white my-3 w-full'>
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{task.name}</div>
                  <p className='text-gray-700 text-base'>{task.description}</p>
                  <p className='text-gray-700 text-base'>{task.links}</p>
                  <p className='text-gray-700 text-base'>{task.contact}</p>
                  <p className='text-gray-700 text-base'>{task.pay}</p>
                  <p className='text-gray-700 text-base'>{task.companyName}</p>
                  <p className='text-gray-700 text-base'>{task.dueDate}</p>
                  <p className='text-gray-700 text-base'>{task.status}</p>
                </div>
              </div>
            ))}
        </div>

        <div className='flex flex-col justify-center md:items-start w-full px-2 mt-2 bg-green-600 rounded-lg'>
          {/* items */}
          <div className='font-bold text-xl text-white'>
            <h1>TASKS COMPLETED</h1>
          </div>
          {todoTasks
            .filter(val => val.status === 'done')
            .map(task => (
              <div className='rounded overflow-hidden shadow-lg bg-white my-3 w-full'>
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{task.name}</div>
                  <p className='text-gray-700 text-base'>{task.description}</p>
                  <p className='text-gray-700 text-base'>{task.links}</p>
                  <p className='text-gray-700 text-base'>{task.contact}</p>
                  <p className='text-gray-700 text-base'>{task.pay}</p>
                  <p className='text-gray-700 text-base'>{task.companyName}</p>
                  <p className='text-gray-700 text-base'>{task.dueDate}</p>
                  <p className='text-gray-700 text-base'>{task.status}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
