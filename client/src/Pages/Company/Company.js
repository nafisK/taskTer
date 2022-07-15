import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import TimelineHeader from '../../Components/Company/TimelineHeader'
import Body from '../../Components/Company/CompanyBody'
import { UserContext } from '../../Components/Helper/Context'
import Navbar from '../../Components/Helper/Navbar'

export default function Company() {
  // TODO: NAVBAR IS HIDING TOP OF TIMELINE
  const navigate = useNavigate()

  const { isLoggedIn } = useContext(UserContext)
  if (isLoggedIn === false) {
    navigate('/')
  }

  return (
    <div>
      <Navbar />
      <TimelineHeader />
      <Body />
    </div>
  )
}
