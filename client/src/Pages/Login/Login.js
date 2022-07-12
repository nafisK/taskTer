import { React, useState } from 'react'
import loginImg from '../../assets/login.jpg'
import LoginForm from '../../Components/Login/LoginForm'
import CompanySignUpForm from '../../Components/Login/CompanySignUp'
import FreelancerSignUpForm from '../../Components/Login/FreelancerSignUp'

function Login() {
  // db user needs type: company/freelancer

  // tasks: seperate, id, name, description, due date, status,

  const COMPANY = 'company'
  const FREELANCER = 'freelancer'
  const LOGIN = 'login'

  const [form, setform] = useState(LOGIN)
  const setForm = status => {
    setform(status)
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt='' />
      </div>

      <div className='bg-gray-100 flex flex-col justify-center'>
        {/* LOGIN */}
        {form === LOGIN && <LoginForm setForm={setForm} />}

        {/* Company Sing Up */}
        {form === COMPANY && <CompanySignUpForm setForm={setForm} />}

        {/* Freelancer Sing Up */}
        {form === FREELANCER && <FreelancerSignUpForm setForm={setForm} />}
      </div>
    </div>
  )
}

export default Login
