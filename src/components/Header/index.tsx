import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { StarBackground } from '../Backgrounds';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Header = ({}: Props) => {
  return (
    <header className='headerWithBgImg h-[100dvh] grid place-items-center relative overflow-clip [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_75%,transparent)]'>
      <StarBackground />
      <div className='responsiveContainer flex flex-col items-center text-neutral-100 pt-24 pb-16'>
        <h1 className='flex flex-col text-4xl sm:text-5xl lg:text-6xl font-extrabold items-center text-center gap-1 font-serif'>
          <span className='bg-gradient-to-t from-sky-500 to-sky-600 text-transparent block bg-clip-text py-2'>
            {' '}
            Lost with a great idea?
          </span>
          <span className='bg-gradient-to-b from-neutral-100 to-neutral-300 text-transparent block bg-clip-text py-2'>
            Let our expertise guide you.
          </span>
        </h1>

        <p className='text-center lg:w-3/5 mx-auto text-base md:text-xl mt-5 text-neutral-300'>
          Our team of experienced professionals is here to guide you through
          every step of the journey, from concept to execution.
        </p>

        <div className='flex flex-col sm:flex-row gap-5 justify-center mt-10'>
          <Link
            href='https://calendly.com/codershivansh/30min?month=2024-08'
            target='_blank'
            className='btn btn--border'>
            Book a Call <IoMdArrowForward className='-rotate-45 h-4 w-auto' />
          </Link>
          <Link href='/projects' className='btn btn--fill'>
            View Work <IoMdArrowForward className='-rotate-45 h-4 w-auto' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
