import React from 'react'
import ComingSoonPage from '../components/ComingSoon'
import Navbar2 from '../components/Navbar2'

const tpoteam = () => {
  return (
    <Navbar2 loginStatus={false} userType={'applicant'}>
      <ComingSoonPage />
    </Navbar2>
  )
}

export default tpoteam