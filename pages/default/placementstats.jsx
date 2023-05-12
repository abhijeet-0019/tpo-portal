import React from 'react'
import ComingSoonPage from '../components/ComingSoon'
import Navbar2 from '../components/Navbar2'

const placementstats = () => {
    return (
        <Navbar2 loginStatus={false} userType={''}>
            <ComingSoonPage />
        </Navbar2>
    )
}

export default placementstats