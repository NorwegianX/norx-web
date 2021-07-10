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
  const isHomepage = router.pathname === '/' ? true : false;

  const routes: Route[] = [
    { name: 'About me', icon: 'fa-user-circle', path: '/about' },
    { name: 'Resume', icon: 'fa-file-user', path: '/resume' },
    { name: 'Otter Productions', icon: 'fa-otter', path: '/otter-productions' },
    { name: 'Contact', icon: 'fa-envelope', path: '/contact' },
  ];

  const navButtonText = {
    homePage: {},
    offPage: {
      marginLeft: '.5rem',
      marginRight: '2rem',
    },
  };
  const navButtonIcon = {
    homePage: {},
    offPage: {
      fontSize: '1.6rem',
    },
  };
  const navButtonLink = {
    homePage: {},
    offPage: {
      height: '2rem',
    },
  };

  const navContainer = {
    homePage: {},
    offPage: {
      fontSize: '1.05rem',
      background: '#00869E',
      color: 'white',
    },
  };

  const initial = isHomepage ? 'homePage' : 'offPage';

  return (
    <motion.div
      initial={initial}
      animate={initial}
      variants={navContainer}
      className="flex w-full"
    >
      <Container>
        {isHomepage ? (
          <div className={classnames('relative w-full h-96')}>
            <Image src={logo} className="object-contain" layout="fill" />
          </div>
        ) : (
          <></>
        )}

        <div
          className={classnames(
            'flex w-full justify-center w-full',
            isHomepage ? 'mt-16' : 'mt-4 mb-4'
          )}
        >
          {routes.map((route: Route) => {
            return (
              <Link href={route.path} key={route.path}>
                <motion.a
                  className={classnames('flex cursor-pointer')}
                  initial={initial}
                  animate={initial}
                  variants={navButtonLink}
                >
                  <motion.i
                    className={classnames('flex items-center fad ', route.icon)}
                    initial={initial}
                    animate={initial}
                    variants={navButtonIcon}
                  ></motion.i>
                  <motion.div
                    className={classnames(
                      'flex items-center w-full font-semibold'
                    )}
                    initial={initial}
                    animate={initial}
                    variants={navButtonText}
                  >
                    {route.name}
                  </motion.div>
                </motion.a>
              </Link>
            );
          })}
        </div>
      </Container>
    </motion.div>
  );
};

Navbar.propTypes = {};

export default Navbar;
