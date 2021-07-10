import Image from 'next/image';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Container from './container';
import logo from '../public/images/logo.png';

type Route = {
  name: string;
  icon: string;
  path: string;
};

const Navbar = () => {
  const router = useRouter();
  const isHomepage = router.pathname === '/' ? true : false;

  const routes: Route[] = [
    { name: 'Resume Download', icon: 'fa-file-user', path: '/resume' },
    { name: 'Otter Productions', icon: 'fa-otter', path: '/otter-productions' },
    { name: 'Contact Information', icon: 'fa-envelope', path: '/contact' },
  ];

  return (
    <Container>
      <div
        className={classnames(
          'flex justify-center flex-col',
          isHomepage ? 'min-h-screen w-full' : 'w-2/3'
        )}
      >
        <div
          className={classnames(
            'relative w-full h-96',
            !isHomepage ? 'hidden' : ''
          )}
        >
          <Image src={logo} className="object-contain" layout="fill" />
        </div>
        <div
          className={classnames(
            'flex w-full justify-around',
            isHomepage ? 'mt-16' : 'mt-4 mb-4'
          )}
        >
          {routes.map((route: Route) => {
            return (
              <Link href={route.path} key={route.path}>
                <a className="flex flex-col items-center w-36">
                  <i
                    className={classnames(
                      'fad ',
                      route.icon,
                      isHomepage ? 'text-7xl' : 'text-6xl'
                    )}
                  ></i>
                  {isHomepage ? (
                    <h2 className="w-full text-center mt-4">{route.name}</h2>
                  ) : (
                    ''
                  )}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

Navbar.propTypes = {};

export default Navbar;
