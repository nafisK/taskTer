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

  const handleCancelTask = name => {
    axios
      .delete(`http://localhost:4000/task/cancel/${name}`)
      .then(res => {
        const index = todoTasks.findIndex(todo => todo.name === res.data.name)
        const newTodoTasks = [...todoTasks]
        newTodoTasks.splice(index, 1)
        setTodoTasks(newTodoTasks)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='w-full h-screen bg-zinc-200 '>
      <NewTaskButton
        company={company}
        todoTasks={todoTasks}
        setTodoTasks={setTodoTasks}
      />
      <div className='grid md:grid-cols-2 gap-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col md:items-start w-full px-2 mt-7 bg-red-600 rounded-lg'>
          <div className='font-bold text-xl text-white mt-2'>
            <h1>PUBLISHED</h1>
          </div>
          {/* items */}

          {todoTasks
            .filter(val => val.status === 'todo')
            .map(task => (
              <div
                key={task.name}
                className='rounded overflow-hidden shadow-lg bg-white my-3 w-full'
              >
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{task.name}</div>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Company: </span>
                    {task.companyName}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Description: </span>
                    {task.description}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Project Link: </span>
                    {task.links}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Contact: </span>
                    {task.contact}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Payment Amount: </span>
                    {task.pay}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Due On: </span>
                    {task.dueDate}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Status: </span>
                    <span className='text-red-600 font-bold uppercase '>
                      {task.status}
                    </span>
                  </p>
                  <button
                    onClick={() => handleCancelTask(task.name)}
                    type='button'
                    className='text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center py-2 px-4 mt-3'
                  >
                    CANCEL TASK
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className='flex flex-col md:items-start w-full px-2 mt-7 bg-green-600 rounded-lg'>
          {/* items */}
          <div className='font-bold text-xl text-white mt-2'>
            <h1>COMPLETED</h1>
          </div>
          {todoTasks
            .filter(val => val.status === 'done')
            .map(task => (
              <div
                key={task.name}
                className='rounded overflow-hidden shadow-lg bg-white my-3 w-full'
              >
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{task.name}</div>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Company: </span>
                    {task.companyName}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Description: </span>
                    {task.description}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Project Link: </span>
                    {task.links}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Contact: </span>
                    {task.contact}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Payment Amount: </span>
                    {task.pay}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Due On: </span>
                    {task.dueDate}
                  </p>
                  <p className='text-gray-700 text-base'>
                    <span className='font-bold'>Status: </span>
                    <span className='text-green-600 font-bold uppercase '>
                      {task.status}
                    </span>
                  </p>
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
