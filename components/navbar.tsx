import { useState, useEffect } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';
const tw = resolveConfig(tailwindConfig);
import logo from '../public/images/logo.png';

type Route = {
  name: string;
  icon: string;
  path: string;
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setMobileOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  });

  const routes: Route[] = [
    { name: 'About me', icon: 'fa-user-circle', path: '/about' },
    { name: 'Resume', icon: 'fa-file-user', path: '/resume' },
    { name: 'Otter Productions', icon: 'fa-otter', path: '/otter-productions' },
    { name: 'Contact', icon: 'fa-envelope', path: '/contact' },
  ];

  const activeRoute = routes.find(route => router.pathname === route.path);

  const RouteLink = ({ route }: { route: Route }) => {
    const iconClass = classnames(
      'flex pr-2 text-2xl items-center fad w-14 justify-center',
      route.icon
    );

    const linkClass = classnames(
      'flex cursor-pointer h-16 md:h-12 md:h-full pl-4 pr-4 hover:bg-norx-blue-650 active:bg-norx-blue-600 hover:outline-none',
      (router.pathname === route.path ? 'text-norx-blue-100' : '')
    );

    return (
      <Link href={route.path}>
        <a className={linkClass}>
          <i className={iconClass}></i>
          <div className="flex items-center w-full font-semibold">
            {route.name}
          </div>
        </a>
      </Link>
    );
  };

  const MobileHeader = () => {
    return (
      <div
        className={classnames(
          'flex h-norx-nav bg-norx-blue-700',
          mobileOpen ? 'hidden' : 'flex md:hidden'
        )}
      >
        <div className="flex items-center ml-4 text-xl">
          {activeRoute ? activeRoute.name : 'Not found'}
        </div>
        <button
          className="ml-auto w-12"
          type="button"
          onClick={() => setMobileOpen(true)}
        >
          <i className="fad fa-bars text-2xl"></i>
        </button>
      </div>
    );
  };

  const RouteLinkWrapperClose = () => {
    return (
      <div className="flex mt-auto md:hidden">
        <button
          className="flex items-center rounded-lg p-4 h-12 bg-norx-blue-300 mb-8 w-full ml-8 mr-8 shadow text-norx-blue-700 font-semibold"
          type="button"
          onClick={() => setMobileOpen(false)}
        >
          Close menu
          <i className="fad fa-times text-2xl ml-auto"></i>
        </button>
      </div>
    );
  };

  const RouteLinkWrapper = ({ routes }: { routes: Route[] }) => {
    return (
      <div
        className={classnames(
          'flex flex-col md:flex-row absolute md:relative w-full justify-start md:justify-center bg-norx-blue-700 z-10 h-screen md:h-norx-nav',
          mobileOpen ? 'flex' : 'hidden md:flex'
        )}
      >
        {routes.map((route: Route) => {
          return <RouteLink route={route} key={route.path}  />;
        })}
        <RouteLinkWrapperClose />
      </div>
    );
  };

  return (
    <div className="text-base text-white">
      <MobileHeader />
      <RouteLinkWrapper routes={routes} />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
