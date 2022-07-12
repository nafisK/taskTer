import { React, useState } from 'react'

function LoginForm({ setForm }) {
  const COMPANY = 'company'
  const FREELANCER = 'freelancer'

  return (
    <form className='max-w-[400px] w-full mx-auto bg-white p-5 rounded-md shadow-lg'>
      <h2 className='text-4xl font-bold text-center py-6 text-yellow-400'>
        TASKTER.
      </h2>
      <div>
        <div className='flex flex-col py-2 '>
          <label className='font-bold text-gray-700'>Email</label>
          <input className='border border-yellow-400 p-2' type='text' />
        </div>
        <div className='flex flex-col py-2'>
          <label className='font-bold text-gray-700'>Password</label>
          <input className='border p-2 border-yellow-400' type='password' />
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
