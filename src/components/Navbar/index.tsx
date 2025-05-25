'use client'
import { routes } from '@/lib/constant';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import Logo from '../Logo';
import NavLink from '../NavLink';
import { useState } from 'react';


type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Navbar = ({}: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

        <button type='button' className='block lg:hidden' onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        {isMenuOpen && (
  <ul className='absolute top-full mt-2 left-0 w-full bg-gray-800 border-t border-gray-700 lg:hidden flex flex-col items-center space-y-2 py-4'>
    {routes.map((route, index) => (
      <li key={route.path} className='w-full text-center capitalize'>
        <NavLink href={route.path} id={`${index}`} onClick={() => setIsMenuOpen(false)}>
          {route.name}
        </NavLink>
      </li>
    ))}
    <li>
      <Link
        href="/contact"
        className="mt-2 rounded-xl py-2 px-5 bg-primary inline-block"
        onClick={() => setIsMenuOpen(false)}
      >
        Start a Project
      </Link>
    </li>
  </ul>
)}

      </div>
    </nav>
  );
};

export default Navbar;
