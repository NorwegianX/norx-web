import '../styles/global.css';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/navbar';

export default function App({ Component, pageProps, router }: AppProps) {
  console.log('Main app ', router.route, pageProps);
  return (
    <>
      <Navbar></Navbar>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
