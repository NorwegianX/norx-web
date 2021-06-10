import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from './navbar';

const Page = ({ children }) => {
  return (
    <main>
      <Head>
        <title>Norwegian X</title>
        <link rel="shortcut icon" href="/norx.ico" type="image/x-icon" />
      </Head>
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </main>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
