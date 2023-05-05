import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter();

  useEffect (()=>{
    router.push('/login');
  }, [])
  return (
    <>
      <h1>Loading...</h1>
    </>
  )
}

export default HomePage