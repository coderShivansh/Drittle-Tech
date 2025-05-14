import { INTERNSHIPS } from '@/lib/constant';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { SiReaddotcv } from 'react-icons/si';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Internships = ({}: Props) => {
  return (
    <section className='responsiveContainer flex flex-col py-20 gap-16'>
      <h2 className='headingWithBorder'>Internships</h2>

      <ul className='grid grid-cols-3 gap-5'>
        {INTERNSHIPS.map((intern) => (
          <li
            key={intern.id}
            className='flex flex-col gap-5 p-5 items-center border border-neutral-800 rounded-xl'>
            {intern.icon && (
              <intern.icon className='h-14 text-neutral-400 w-auto' />
            )}

            <h4 className='text-2xl font-semibold'>{intern.heading}</h4>
            <p className='text-neutral-200 md:text-lg text-center'>
              {intern.description}
            </p>

            <div className='flex items-center gap-3 justify-center'>
              <Link
                href={'/intership'}
                className='px-6 py-1.5 bg-gradient-to-br from-neutral-500 to-neutral-600 rounded-full flex items-center gap-1'>
                Know More
                <IoIosArrowForward className='w-auto h-4' />
              </Link>
              <Link
                href={'/internship'}
                className='px-6 py-1.5 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center gap-2'>
                <SiReaddotcv className='w-auto h-4' />
                Apply Now
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Internships;
