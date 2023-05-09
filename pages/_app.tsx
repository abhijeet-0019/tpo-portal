import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import Navbar2 from '../pages/components/Navbar2';
import useAPIAuth from '../apiConfig/useAPIAuth';
import { useEffect, useState } from 'react';
import useAPIData from '../apiConfig/useAPIData';

import dynamic from 'next/dynamic';

const Navbar2 = dynamic(() => import('../pages/components/Navbar2'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {

  const { loginStatus } = useAPIAuth();
  const [userType, setUserType] = useState('');
  const { getItems } = useAPIData();

  useEffect(() => {
    if (loginStatus) {
      const fetchData = async () => {
        try {
          const email = sessionStorage.getItem('userEmail')
          const listResponse = await getItems('TPO_students_personal_details', null, null, null, null, null, null, true);
          const list = listResponse.data;
          const user = list.find((item: { email: string | null; }) => item.email === email);
          const userType = user?.user_type || ""; // if user is null, return an empty string as the user_type
          setUserType(userType); // set the userType state to the value of userType
          console.log("user type in app.tsx--> ", userType)
          sessionStorage.setItem('userType', userType);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [loginStatus, userType]);

  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}