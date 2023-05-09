import React from 'react'
import Navbar2 from '../components/Navbar2'

const dashboard = () => {
  return (
    <Navbar2 loginStatus={true} userType={'admin'}>
      <div>dashboard</div>
    </Navbar2>
  )
}

export default dashboard