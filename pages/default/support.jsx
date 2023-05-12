import React from 'react'
import ComingSoonPage from '../components/ComingSoon'
import Navbar2 from '../components/Navbar2'

const support = () => {
  return (
    <Navbar2 loginStatus={true} userType={'applicant'}>
      <ComingSoonPage />
    </Navbar2>
  )
}

export default support