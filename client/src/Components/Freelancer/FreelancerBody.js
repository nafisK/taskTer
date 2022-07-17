import pfp from '../../assets/better_headshot.jpeg'
import { React, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Helper/Context'
import axios from 'axios'

export default function FreelancerBody() {
  const navigate = useNavigate()
  const { resetUsers, setIsLoggedIn, freelancer } = useContext(UserContext)

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

  const handleTakeTask = name => {
    axios
      .put(`http://localhost:4000/task/take/${name}`)
      .then(res => {
        const index = todoTasks.findIndex(todo => todo.name === res.data.name)
        const newTodoTasks = [...todoTasks]
        newTodoTasks[index].status = 'doing'
        setTodoTasks(newTodoTasks)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleCompletedTask = name => {
    axios
      .put(`http://localhost:4000/task/done/${name}`)
      .then(res => {
        const index = todoTasks.findIndex(todo => todo.name === res.data.name)
        const newTodoTasks = [...todoTasks]
        newTodoTasks[index].status = 'done'
        setTodoTasks(newTodoTasks)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='w-full h-screen bg-zinc-200 '>
      <div className={`shadow relative text-center ${freelancer.gradient}`}>
        <div className='relative h-96 rounded-b flex justify-center'>
          <div className='absolute -bottom-6'>
            <img
              src={pfp}
              className='object-cover border-4 border-white w-60 h-60 rounded-full'
              alt='logo'
            />
          </div>
        </div>
      </div>

      <div className='grid md:grid-cols-3 gap-2 max-w-[1240px] m-auto mt-10'>
        <div className='flex flex-col md:items-start w-full px-2 mt-7 bg-red-600 rounded-lg'>
          {/* items */}
          <div className='font-bold text-xl text-white mt-2'>
            <h1>TASKS PUBLISHED</h1>
          </div>
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
                    onClick={() => handleTakeTask(task.name)}
                    className='mt-2 bg-transparent hover:bg-orange-600
                    text-yellow-500 font-semibold hover:text-white py-2 px-4
                    border border-yellow-500 hover:border-transparent rounded'
                  >
                    Take Task
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className='flex flex-col md:items-start w-full px-2 mt-7 bg-orange-600 rounded-lg'>
          {/* items */}
          <div className='font-bold text-xl text-white mt-2'>
            <h1>IN PROGRESS</h1>
          </div>
          {todoTasks
            .filter(val => val.status === 'doing')
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
                    <span className='text-orange-600 font-bold uppercase '>
                      {task.status}
                    </span>
                  </p>
                  <button
                    onClick={() => handleCompletedTask(task.name)}
                    className='mt-2 bg-transparent hover:bg-green-600 text-yellow-500 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded'
                  >
                    Mark as Complete
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className='flex flex-col md:items-start w-full px-2 mt-7 bg-green-600 rounded-lg'>
          {/* items */}
          <div className='font-bold text-xl text-white mt-2'>
            <h1>TASKS COMPLETED</h1>
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
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
