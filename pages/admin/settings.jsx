import React from 'react'
import ComingSoonPage from '../components/ComingSoon'
import Navbar2 from '../components/Navbar2'

const settings = () => {
  return (
    <Navbar2 loginStatus={true} userType={'admin'}>
      <ComingSoonPage />
    </Navbar2>
  )
}

export default settings