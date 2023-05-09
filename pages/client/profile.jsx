import React from 'react'
import Navbar2 from '../components/Navbar2'

const profile = () => {
  return (
    <Navbar2 loginStatus={true} userType={'applicant'}>
      <div>profile</div>
    </Navbar2>
  )
}

export default profile