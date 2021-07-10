import PropTypes from 'prop-types';
import Head from 'next/head';

const Page = ({ children }) => {
  return (
    <>
      <Head>
        <title>Norwegian X</title>
        <link rel="shortcut icon" href="/norx.ico" type="image/x-icon" />
      </Head>
      {children}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
