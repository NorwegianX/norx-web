import Image from 'next/image';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';
const tw = resolveConfig(tailwindConfig);

import Container from './container';
import logo from '../public/images/logo.png';

type Route = {
  name: string;
  icon: string;
  path: string;
};

const Navbar = () => {
  const router = useRouter();

  const routes: Route[] = [
    { name: 'About me', icon: 'fa-user-circle', path: '/about' },
    { name: 'Resume', icon: 'fa-file-user', path: '/resume' },
    { name: 'Otter Productions', icon: 'fa-otter', path: '/otter-productions' },
    { name: 'Contact', icon: 'fa-envelope', path: '/contact' },
  ];

  return (
    <div className="flex w-full text-base text-white bg-norx-blue-500 h-12">
      <Container>
        <div className={classnames('flex w-full justify-center w-full')}>
          {routes.map((route: Route) => {
            return (
              <Link href={route.path} key={route.path}>
                <a
                  className={classnames(
                    'flex cursor-pointer h-full pl-4 pr-4',
                    router.pathname === route.path ? 'text-norx-blue-100' : ''
                  )}
                >
                  <i
                    className={classnames(
                      'flex pr-2 text-2xl items-center fad ',
                      route.icon
                    )}
                  ></i>
                  <div
                    className={classnames(
                      'flex items-center w-full font-semibold'
                    )}
                  >
                    {route.name}
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
