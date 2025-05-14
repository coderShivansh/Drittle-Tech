import { routes } from '@/lib/constant';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import Logo from '../Logo';
import NavLink from '../NavLink';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Navbar = ({}: Props) => {
  return (
    <nav className='fixed top-3 sm:top-6 left-0 w-full z-[100]'>
      <div className='w-[92%] mx-auto md:w-[80%] lg:w-[88%] xl:w-[75%] text-gray-100 rounded-2xl bg-gray-800 border border-gray-700 bg-opacity-50 backdrop-blur-lg flex items-center justify-between gap-2 xl:gap-5 py-4 px-5'>
        <Link href={'/'}>
          <Logo />
        </Link>

        <ul className='navlist lg:flex'>
          {routes.map((route, index) => (
            <li key={route.path} className='shrink-0'>
              <NavLink href={route.path} id={`${index}`}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          href={'/contact'}
          className='rounded-xl py-2 px-5 bg-primary hidden lg:block'>
          Start a Project
        </Link>

        <button type='button' className='block lg:hidden'>
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
