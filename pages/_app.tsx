import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar2 from '../pages/components/Navbar2';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar2>
        <Component {...pageProps} />
      </Navbar2>
    </div>
  )
}
