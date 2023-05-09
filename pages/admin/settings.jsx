import React from 'react'
import Navbar2 from '../components/Navbar2'

const settings = () => {
  return (
    <Navbar2 loginStatus={true} userType={'admin'}>
      <div>settings</div>
    </Navbar2>
  )
}

export default settings