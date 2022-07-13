import Login from './Pages/Login/Login'
import Error404 from './Pages/Misc/Error404'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Company from './Pages/Company/Company'
import Freelancer from './Pages/Freelancer/Freelancer'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/company' element={<Company />} />
        <Route exact path='/freelancer' element={<Freelancer />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
