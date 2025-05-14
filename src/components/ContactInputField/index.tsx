'use client';
import { ContactInput } from '@/types';
import React, { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren & ContactInput;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const ContactInputField = ({ id, label, type, required }: Props) => {
  switch (type) {
    case 'textarea':
      return (
        <div className='flex flex-col gap-2'>
          <label htmlFor={id} className='text-sm'>
            {label}
          </label>
          <textarea
            rows={5}
            name={id}
            id={id}
            className='py-1.5 px-3 rounded-md border-white/15 bg-gray-800 border outline-none focus:shadow-[0_0_10px] focus:shadow-sky-500/40 transition-all duration-300 focus:border-sky-500/40'
          />
        </div>
      );

    default:
      return (
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-sm'>
            {label}
          </label>
          <input
            type={type}
            name={id}
            id={id}
            className='py-1.5 px-3 rounded-md border-white/15 bg-gray-800 border outline-none focus:shadow-[0_0_10px] focus:shadow-sky-500/40 transition-all duration-300 focus:border-sky-500/40'
          />
        </div>
      );
  }
};

export default ContactInputField;
