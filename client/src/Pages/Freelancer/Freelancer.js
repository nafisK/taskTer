import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import TimelineHeader from '../../Components/Company/TimelineHeader'
import { UserContext } from '../../Components/Helper/Context'
import NavBar from '../../Components/Helper/Navbar'
import FreelancerBody from '../../Components/Freelancer/FreelancerBody'

export default function Freelancer() {
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(UserContext)
  if (!isLoggedIn) {
    navigate('/')
  }
  return (
    <div>
      <NavBar />
      {/* <TimelineHeader /> */}
      <FreelancerBody />
    </div>
  )
}
