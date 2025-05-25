/* eslint-disable react/no-unescaped-entities */
import { INTERNSHIPS } from '@/lib/constant';
import Link from 'next/link';
import React from 'react';
import { BiX } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { RiMoneyRupeeCircleFill } from 'react-icons/ri';
import GrainImage from '@/assets/images/grain.jpg';
import { SiReaddotcv } from 'react-icons/si';
import SectionHeader from '@/components/SectionHeader';
import { DottedBackground } from '@/components/Backgrounds';
import { IoMdArrowForward } from 'react-icons/io';
import { HiOfficeBuilding } from 'react-icons/hi';
import { LuCalendarRange } from 'react-icons/lu';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Drittle Tech | Careers',
  description:
    'Careers at Drittle Tech | IT Services Company | Build Your IT Here | Software | MVP',
};

type Props = {};
/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const CareersPage = ({}: Props) => {
  return (
    <>
      <header className='h-[100dvh] grid place-items-center relative overflow-hidden'>
        <DottedBackground />
        <div className='flex flex-col gap-6 responsiveContainer'>
          <h1 className='text-4xl text-center md:text-5xl font-serif font-bold'>
            <span> Forge Your Future </span>
            <span className='block mt-3'> Shape the World with Us</span>
          </h1>

          <p className='text-lg md:text-xl text-white/80 lg:w-[60%] md:w-[80%] w-full mx-auto text-center'>
            {' '}
            We are a passionate team dedicated to crafting smart digital
            solutions for businesses worldwide. If you're a driven, creative,
            and skilled professional, Drittle Tech is the place for you.
          </p>

          <Link href='/careers#openPositions' className='btn btn--fill self-center mt-4'>
            Explore Openings{' '}
            <IoMdArrowForward className='rotate-90 h-4 w-auto' />
          </Link>
        </div>
      </header>

      <section id='openPositions' className='responsiveContainer py-16 flex flex-col'>
        <SectionHeader heading='Open Positions' description='Come Join us' />
        <div className='flex w-full mb-10'>
          <div className='self-end w-max ml-auto border-b border-gray-300 flex gap-2 items-center'>
            <FiSearch className='h-4 w-auto mx-1' />
            <input
              autoComplete='off'
              type='text'
              role='searchbox'
              name='search'
              id='search'
              placeholder='Search'
              className='bg-transparent py-1.5 pr-3 outline-none'
            />
            <BiX className='h-5 mr-1 w-auto' />
          </div>
        </div>

        <ul className='flex flex-col gap-5'>
          {INTERNSHIPS.map((intern) => (
            <li
              className='rounded-3xl shadow-[0_0_15px] shadow-gray-950/20 bg-gray-800 relative p-6'
              key={intern.id}>
              <div
                className='absolute top-0 left-0 w-full h-full opacity-5 -z-[-10] pointer-events-none'
                style={{ backgroundImage: `url(${GrainImage.src})` }}
              />
              <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-2'>
                  {intern.icon && (
                    <intern.icon className='h-8 text-gray-400 w-auto' />
                  )}

                  <h4 className='text-2xl font-semibold'>{intern.heading}</h4>

                  <p className='font-semibold ml-auto flex items-center gap-2'>
                    <LuCalendarRange />
                    {new Intl.DateTimeFormat('en-UK', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    }).format(new Date(intern.date))}
                  </p>
                </div>

                <p className='text-gray-300'>{intern.description}</p>
              </div>

              <div className='border-t-2 border-white/20 flex flex-wrap items-center mt-6 pt-4 gap-6 w-full'>
                <p className='flex items-center gap-2 relative'>
                  <HiOfficeBuilding /> Remote
                </p>{' '}
                <p className='flex items-center gap-2'>
                  <RiMoneyRupeeCircleFill className='h-5 w-auto' />{' '}
                  {intern.stipend}
                </p>
                <p className='before:w-2 before:h-2 before:rounded-full before:bg-teal-500 relative before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 pl-3'>
                  Mid-Level
                </p>{' '}
                <Link
                  href={'/internship'}
                  className='px-6 h-12 rounded-2xl bg-gray-950 flex items-center gap-2 font-medium ml-auto'>
                  <SiReaddotcv className='w-auto h-4' />
                  Apply Now
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CareersPage;
