import React, { PropsWithChildren } from 'react';

type Props = {
  heading: string;
  description: string;
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const SectionHeader = ({ description, heading }: Props) => {
  return (
    <>
      <h2 className='text-center font-serif text-3xl md:text-4xl font-bold'>
        {heading}
      </h2>
      <p className='w-full md:w-1/2 2xl:w-[40%] mx-auto text-center text-sm md:text-base text-white/50 mt-4 mb-16'>
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
