import Image from 'next/image';
import classnames from 'classnames';
import Link from 'next/link';

import Container from './container';
import logo from '../public/images/logo.png';

type Route = {
  name: string;
  icon: string;
  path: string;
};

const Navbar = () => {
  const routes: Route[] = [
    { name: 'Resume Download', icon: 'fa-file-user', path: '/resume' },
    { name: 'Otter Productions', icon: 'fa-otter', path: '/otter-productions' },
    { name: 'Contact Information', icon: 'fa-envelope', path: '/contact' },
  ];

  return (
    <Container>
      <div className="relative w-full h-96">
        <Image src={logo} className="object-contain" layout="fill" />
      </div>
      <div className="flex w-full justify-around mt-16">
        {routes.map((route: Route) => {
          return (
            <Link href={route.path} key={route.path}>
              <a className="flex flex-col items-center w-36">
                <i className={classnames('text-7xl fad', route.icon)}></i>
                <h2 className="w-full text-center mt-4">{route.name}</h2>
              </a>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

Navbar.propTypes = {};

export default Navbar;
