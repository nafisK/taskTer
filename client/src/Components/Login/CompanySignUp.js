import { React, useState } from 'react'
import { Dialog } from '@headlessui/react'
import SuccessDialogue from '../../Components/Login/SuccessDialogue'
const Axios = require('axios')

function CompanySignUp({ setForm }) {
  //   company: type, name, email, password, dropdown of gradients, banner image, logo,
  const LOGIN = 'login'
  const GRADIENTS = [
    'bg-gradient-to-r from-cyan-500 to-blue-500',
    'bg-gradient-to-r from-yellow-400 to-orange-500',
    'bg-gradient-to-r from-orange-400 to-pink-500',
    'bg-gradient-to-r from-white to-black',
    'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  ]

  const [data, setData] = useState({
    type: 'company',
    name: '',
    email: '',
    password: '',
    banner: null,
    logo: null,
    gradient: GRADIENTS[0],
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleForm = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const handleFileBanner = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.files[0]
    setData(newData)
  }
  const handleFileLogo = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.files[0]
    setData(newData)
  }

  const handleGradient = e => {
    const newData = { ...data }
    if (e.target.id === 'gradient1') {
      newData['gradient'] = GRADIENTS[0]
    } else if (e.target.id === 'gradient2') {
      newData['gradient'] = GRADIENTS[1]
    } else if (e.target.id === 'gradient3') {
      newData['gradient'] = GRADIENTS[2]
    } else if (e.target.id === 'gradient4') {
      newData['gradient'] = GRADIENTS[3]
    } else if (e.target.id === 'gradient5') {
      newData['gradient'] = GRADIENTS[4]
    }
    setData(newData)
  }

  const handleSubmit = e => {
    e.preventDefault()

    var bodyFormData = new FormData()
    bodyFormData.append('type', data.type)
    bodyFormData.append('name', data.name)
    bodyFormData.append('email', data.email)
    bodyFormData.append('password', data.password)
    bodyFormData.append('banner', data.banner)
    bodyFormData.append('logo', data.logo)
    bodyFormData.append('gradient', data.gradient)

    Axios({
      method: 'post',
      url: 'http://localhost:4000/company/',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        //handle success
        console.log(response)
        if (response.data === 'success') {
          setIsOpen(true)
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
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
        <div className='flex flex-col py-2'>
          <label className='font-bold text-gray-700'>Company Name</label>
          <input
            className='border border-yellow-400 p-2'
            type='text'
            id='name'
            required
            onChange={e => handleForm(e)}
          />
        </div>
        <div className='flex flex-col py-2 '>
          <label className='font-bold text-gray-700'>Email</label>
          <input
            className='border border-yellow-400 p-2'
            type='text'
            id='email'
            required
            onChange={e => handleForm(e)}
          />
        </div>
        <div className='flex flex-col py-2 text-gray-700'>
          <label className='font-bold'>Password</label>
          <input
            className='border p-2 border-yellow-400'
            type='password'
            required
            id='password'
            onChange={e => handleForm(e)}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='form-label inline-block mb-2 text-gray-700 font-bold'>
            Company Banner
          </label>
          <input
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-yellow-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='file'
            id='banner'
            required
            onChange={e => handleFileBanner(e)}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='form-label inline-block mb-2 text-gray-700 font-bold'>
            Company Logo
          </label>
          <input
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-yellow-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='file'
            required
            id='logo'
            onChange={e => handleFileLogo(e)}
          />
        </div>
        <div className='flex flex-col py-2 '>
          <label className='font-bold text-gray-700'>
            Workspace Background
          </label>
          <div className='flex justify-center'>
            <p
              className={`border p-5 mx-1 rounded-md text-white cursor-pointer ${GRADIENTS[0]}`}
              onClick={e => handleGradient(e)}
              id='gradient1'
            ></p>
            <p
              className={`border p-5 mx-1 rounded-md text-white cursor-pointer ${GRADIENTS[1]}`}
              onClick={e => handleGradient(e)}
              id='gradient2'
            ></p>
            <p
              className={`border p-5 mx-1 rounded-md text-white cursor-pointer ${GRADIENTS[2]}`}
              onClick={e => handleGradient(e)}
              id='gradient3'
            ></p>
            <p
              className={`border p-5 mx-1 rounded-md text-white cursor-pointer ${GRADIENTS[3]}`}
              onClick={e => handleGradient(e)}
              id='gradient4'
            ></p>
            <p
              className={`border p-5 mx-1 rounded-md text-white cursor-pointer ${GRADIENTS[4]}`}
              onClick={e => handleGradient(e)}
              id='gradient5'
            ></p>
          </div>
        </div>

        <button
          type='submit'
          className='border w-full my-5 py-2 rounded-md text-white transition duration-75 ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'
        >
          Sign Up
        </button>

        {isOpen && <SuccessDialogue setIsOpen={setIsOpen} isOpen={isOpen} />}

        <div className='text-center'>
          <button
            className='font-bold text-gray-700'
            onClick={() => setForm(LOGIN)}
          >
            Go back to Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default CompanySignUp
