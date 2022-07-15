import Login from './Pages/Login/Login'
import Error404 from './Pages/Misc/Error404'
import { Routes, Route } from 'react-router-dom'
import Company from './Pages/Company/Company'
import Freelancer from './Pages/Freelancer/Freelancer'
import { UserContext } from './Components/Helper/Context'
import { useState } from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [company, setCompany] = useState({
    type: '',
    name: '',
    email: '',
    password: '',
    gradient: '',
    banner: null,
    logo: null,
  })

  const [freelancer, setFreelancer] = useState({
    type: '',
    name: '',
    email: '',
    password: '',
    gradient: '',
    cash: '',
    pfp: null,
  })

  const resetUsers = () => {
    setCompany({
      type: '',
      name: '',
      email: '',
      password: '',
      gradient: '',
      banner: null,
      logo: null,
    })
    setFreelancer({
      type: '',
      name: '',
      email: '',
      password: '',
      gradient: '',
      cash: '',
      pfp: null,
    })
  }

  return (
    <div className='App'>
      <UserContext.Provider
        value={{
          company,
          setCompany,
          freelancer,
          setFreelancer,
          resetUsers,
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/freelancer' element={<Freelancer />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
