import React, { PropsWithChildren } from 'react';
import SectionHeader from '../SectionHeader';
import GrainImage from '@/assets/images/grain.jpg';
import { BRIEF_SEVICES } from '@/lib/constant';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Services = ({}: Props) => {
  return (
    <section className='responsiveContainer'>
      <SectionHeader
        heading='What we do?'
        description='From intuitive user interfaces to seamless backend integrations, our comprehensive services cover most aspects of software development'
      />

      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-5 2xl:gap-6'>
        {BRIEF_SEVICES.map((service) => (
          <li
            className='flex flex-col gap-3 md:gap-4 py-5 px-8 relative rounded-2xl border border-white/15 bg-gray-800 bg-opacity-30 text-center'
            key={service.id}>
            <div
              className='absolute top-0 left-0 w-full h-full -z-10 bg-blend-darken opacity-5'
              style={{ backgroundImage: `url(${GrainImage.src})` }}
            />

            {service?.icon && (
              <service.icon className='text-sky-300 size-12 md:size-16 mx-auto' />
            )}
            <h5 className='text-xl md:text-2xl font-semibold'>
              {service.heading}
            </h5>
            <p className='text-sm md:text-base text-white/70'>
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
