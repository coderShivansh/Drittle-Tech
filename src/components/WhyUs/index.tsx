'use client';
import { STRENGTHS } from '@/lib/constant';
import React from 'react';
import SectionHeader from '../SectionHeader';
import WhyUsCell from '../WhyUsCell';

type Props = {};
/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const WhyUs = ({}: Props) => {
  return (
    <section className='responsiveContainer flex flex-col text-gray-50'>
      <SectionHeader
        heading='Why Choose Us?'
        description='We are the best when it comes to Deliver Excellence and Empower Growth'
      />
      <ul className='grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-5'>
        {STRENGTHS.map((service) => (
          <WhyUsCell key={service.id} Icon={service.icon} {...service} />
        ))}
      </ul>
    </section>
  );
};

export default WhyUs;
