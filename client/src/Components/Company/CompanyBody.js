import { React, useContext, useEffect, useState } from 'react'
import NewTaskButton from './NewTaskButton'
import { UserContext } from '../Helper/Context'
import axios from 'axios'

export default function Body() {
  const { company } = useContext(UserContext)
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
      <NewTaskButton
        company={company}
        todoTasks={todoTasks}
        setTodoTasks={setTodoTasks}
      />
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 mt-2 '>
          <div className='font-bold text-xl text-red-600'>
            <h1>PUBLISHED</h1>
          </div>
          {/* items */}

          {todoTasks
            .filter(val => val.status == 'todo')
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
                  <button
                    type='button'
                    className='text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center py-2 px-4 mt-3'
                  >
                    CANCEL TASK
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className='flex flex-col justify-center md:items-start w-full px-2 mt-2 '>
          {/* items */}
          <div className='font-bold text-xl text-green-600'>
            <h1>COMPLETED</h1>
          </div>
          {todoTasks
            .filter(val => val.status == 'done')
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
                  <button
                    className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2 px-4 mt-3'
                    type='button'
                  >
                    PAY FREELANCER
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
