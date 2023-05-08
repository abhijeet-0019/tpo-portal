import React from 'react';
import { useRouter } from 'next/router';
import { useAPIAuth } from './apiConfig/useAPIAuth';

// check for the verified user at every instance page rendering

export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    const { loginStatus } = useAPIAuth();

    React.useEffect(() => {
      if (!loginStatus) {
        router.push('/mainlogin');
      }
    }, [loginStatus, router]);

    return loginStatus ? <Component {...props} /> : null;
  };
}