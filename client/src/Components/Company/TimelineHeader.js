import { React, useState, useContext } from 'react'
import { UserContext } from '../Helper/Context'

export default function TimelineHeader() {
  const { company } = useContext(UserContext)
  const [name, setName] = useState(company.name)

  const arrayBufferToBase64 = buffer => {
    var binary = ''
    var bytes = [].slice.call(new Uint8Array(buffer))
    bytes.forEach(b => (binary += String.fromCharCode(b)))
    return window.btoa(binary)
  }

  console.log(company)

  const [logo, setlogo] = useState(
    'https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80'
  )
  const [cover, setcover] = useState(
    'https://images.unsplash.com/photo-1577071835592-d5d55ffef660?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  )

  // TODO ADD GRADIENT HERE

  return (
    <div className={`shadow relative text-center ${company.gradient}`}>
      <div className='relative h-96 rounded-b flex justify-center'>
        <img
          src={cover}
          className='object-cover w-full h-full rounded-b'
          alt='cover'
        />
        <div className='absolute -bottom-6'>
          <img
            src={logo}
            className='object-cover border-4 border-white w-60 h-40 rounded-full'
            alt='logo'
          />
        </div>
      </div>
      <div className='text-center mt-6 text-3xl font-bold text-fBlack pt-3 pb-5'>
        {name}
      </div>
    </div>
  )
}
