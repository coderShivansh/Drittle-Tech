import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { IoMdArrowForward } from 'react-icons/io';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const ContactUs = ({}: Props) => {
  return (
    <section className='responsiveContainer md:py-8 py-6 px-5 text-center md:text-left md:px-10 flex flex-col md:flex-row items-center gap-5 md:gap-10 rounded-3xl md:justify-between bg-gradient-to-br from-emerald-300 to-sky-700'>
      <div className='flex flex-col gap-2 text-gray-950'>
        <h2 className='text-3xl md:text-4xl font-bold font-serif'>
          Let&apos;s create something amazing together
        </h2>
        <p className='text-base md:text-xl'>
          Ready to bring your next project to life? Let&apos;s connect and
          discuss how we can help you achieve your goals
        </p>
      </div>

      <Link
        href='/contact#contactForm'
        className='text-gray-50 flex items-center gap-2 bg-gray-950 rounded-xl pl-6 pr-5 py-3 shrink-0 font-medium'>
        Get in Touch <IoMdArrowForward className='-rotate-45 h-4 w-auto' />
      </Link>
    </section>
  );
};

export default ContactUs;
