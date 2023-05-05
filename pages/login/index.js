import { useState } from 'react';
import { useAPIAuth } from '../../useAPIAuth';
import { useRouter } from 'next/router';
import Backdrop from '@mui/material/Backdrop';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showBackdrop, setShowBackdrop] = useState(false); // Add state variable for backdrop

  const { setUser } = useAPIAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowBackdrop(true); // Show backdrop on form submit
    const success = await setUser({ email, password });
    setShowBackdrop(false); // Hide backdrop after login attempt
    if (success) {
      // Redirect to dashboard or homepage
      router.push('../client/companylist');
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      <Backdrop open={showBackdrop}>Loading...</Backdrop> {/* Render backdrop */}
    </form>
  );
}
