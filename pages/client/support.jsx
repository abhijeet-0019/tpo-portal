import React from 'react'
import ComingSoonPage from '../components/ComingSoon'
import Navbar2 from '../components/Navbar2'
import withAuthClient from '../../apiConfig/withAuthClient'

const support = () => {
    return (
        <Navbar2 loginStatus={true} userType={'applicant'}>
            <ComingSoonPage />
        </Navbar2>
    )
}

export default withAuthClient(support)