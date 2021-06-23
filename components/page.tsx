import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from './navbar';

const Page = ({ children }) => {
  return (
    <>
      <Head>
        <title>Norwegian X</title>
        <link rel="shortcut icon" href="/norx.ico" type="image/x-icon" />
      </Head>
      <Navbar></Navbar>
      {children}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
