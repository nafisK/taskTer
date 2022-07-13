import { React, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginForm({ setForm }) {
  const COMPANY = 'company'
  const FREELANCER = 'freelancer'
  const [data, setData] = useState({
    email: '',
    password: '',
    type: '',
  })
  const navigate = useNavigate()

  const handleForm = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .get('http://localhost:4000/login/', {
        params: {
          email: data.email,
          password: data.password,
          type: data.type,
        },
      })
      .then(res => {
        // handle response
        handleResponse(res)
      })
      .catch(err => {
        // TODO:  make dialog with response from server
        console.log(err)
      })
  }

  const handleResponse = res => {
    console.log(res)
    if (res.data.message === 'Incorrect password') {
      // TODO: DO SOMETHING
    } else if (res.data.message === 'User not found') {
      // TODO: DO SOMETHING
    } else {
      if (res.data.type === 'company') {
        // save data to global context
        navigate('/company')
      } else if (res.data.type === 'freelancer') {
        // save data to global context
        navigate('/freelancer')
      }
    }
  }

  return (
    <form
      className='max-w-[400px] w-full mx-auto bg-white p-5 rounded-md shadow-lg'
      onSubmit={handleSubmit}
    >
      <h2 className='text-4xl font-bold text-center py-6 text-yellow-400'>
        TASKTER.
      </h2>
      <div>
        <div className='flex flex-col py-2 '>
          <label className='font-bold text-gray-700'>Email</label>
          <input
            className='border border-yellow-400 p-2'
            type='text'
            id='email'
            onChange={e => handleForm(e)}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='font-bold text-gray-700'>Password</label>
          <input
            className='border p-2 border-yellow-400'
            id='password'
            type='password'
            onChange={e => handleForm(e)}
          />
        </div>

        <div className='flex justify-center'>
          <div className='flex items-center mr-4 '>
            <input
              id='type'
              type='radio'
              value='company'
              name='colored-radio'
              className='w-4 h-4 text-red-600 '
              onChange={e => handleForm(e)}
            />
            <label className='ml-2 text-sm font-medium text-gray-700 '>
              Company
            </label>
          </div>
          <div className='flex items-center mr-4'>
            <input
              id='type'
              type='radio'
              value='freelancer'
              name='colored-radio'
              className='w-4 h-4 text-green-6000'
              onChange={e => handleForm(e)}
            />
            <label className='ml-2 text-sm font-medium text-gray-700 '>
              Freelancer
            </label>
          </div>
        </div>

        <button className='border w-full my-5 py-2 rounded-md text-white transition duration-75 ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
          Sign In
        </button>
        <div className='text-center'>
          <p className='font-bold text-gray-700'>Sign Up</p>
        </div>
        <div className='flex flex-col items-center	'>
          <button
            className='border p-2 border-yellow-400 m-1 w-4/12 rounded'
            onClick={() => setForm(COMPANY)}
          >
            Company
          </button>
          <button
            className='border p-2 border-yellow-400 m-1 w-4/12 rounded'
            onClick={() => setForm(FREELANCER)}
          >
            Freelancer
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
