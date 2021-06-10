import * as PropTypes from 'prop-types';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="container">
      <Image src="/images/logo.png" className="object-contain" layout="fill" />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
