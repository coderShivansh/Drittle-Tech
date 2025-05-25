/* eslint-disable react/no-unescaped-entities */
import React, { PropsWithChildren } from 'react';
import Logo from '../Logo';
import { routes, SERVICES, socialMediaLinks } from '@/lib/constant';
import Link from 'next/link';
import GrainImage from '@/assets/images/grain.jpg';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Footer = ({}: Props) => {
  return (
    <footer className='py-10 md:py-14 text-gray-50 relative border-t border-white/10'>
      <div
        className='absolute top-0 left-0 w-full h-full -z-10 bg-blend-darken opacity-5 inset-0'
        style={{ backgroundImage: `url(${GrainImage.src})` }}
      />
      <section className='responsiveContainer flex gap-8 lg:gap-14 items-start flex-col lg:flex-row'>
        <div className='flex flex-col gap-5 w-full lg:w-2/5'>
          <Logo height='auto' width='200' />

          <p className='text-gray-200'>
            Drittle Tech aims to transform life and business with cutting-edge
            technology. Our passionate team is dedicated to exceeding client
            expectations through innovative and high-quality solutions, always
            pushing the limits of what's possible.
          </p>

          <div className='items-center gap-4 mt-2 hidden lg:flex'>
            {socialMediaLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className='transition-colors hover:text-primary text-gray-300'>
                <link.icon className='h-6 w-auto' />
              </Link>
            ))}
          </div>

          <p className='mt-2 text-gray-400 hidden lg:block'>
            Copyright &copy; {new Date().getFullYear()} Drittle Tech. All Rights Reserved.
          </p>
        </div>

        <div className='lg:ml-auto flex gap-14 justify-between flex-wrap lg:flex-nowrap self-stretch lg:self-start'>
          <div className='flex flex-col gap-5 order-2 md:-order-none'>
            <h3 className='text-xl border-primary font-medium uppercase border-b pb-1 '>
              Shortcuts
            </h3>

            <ul className='flex flex-col gap-3'>
              {routes.map((route) => (
                <li
                  key={route.path}
                  className='capitalize tracking-wider text-gray-200 hover:text-gray-100 transition-all'>
                  <Link href={route.path}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-5 w-full md:w-max'>
            <h3 className='text-xl border-primary font-medium uppercase border-b pb-1 w-max'>
              Services
            </h3>

            <ul className='grid grid-cols-2 gap-y-3 gap-x-4 content-between w-full'>
              {SERVICES.map((service) => (
                <li
                  key={service.id}
                  className='capitalize tracking-wider text-gray-200 hover:text-gray-100 transition-all'>
                  {service.heading}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex items-center gap-4 mt-5 lg:hidden w-full justify-center'>
          {socialMediaLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className='transition-colors hover:text-primary text-gray-300'>
              <link.icon className='h-6 w-auto' />
            </Link>
          ))}
        </div>

        <p className='text-center w-full text-gray-400 block lg:hidden'>
          Copyright &copy; 2024 Drittle Tech. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
