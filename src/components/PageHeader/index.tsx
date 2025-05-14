import React, { PropsWithChildren } from 'react';
import { DottedBackground } from '../Backgrounds';

type Props = {
  heading: string | JSX.Element;
  description: string;
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const PageHeader = ({ description, heading }: Props) => {
  return (
    <header className='h-[100dvh] relative grid place-items-center'>
      <DottedBackground />
      <div className='responsiveContainer flex flex-col gap-6 items-center'>
        <h1 className='text-center font-serif text-4xl md:text-5xl font-bold'>
          {heading}
        </h1>
        <p className='text-white/80 text-center text-base md:text-lg md:w-[90%]'>
          {description}
        </p>
      </div>
    </header>
  );
};

export default PageHeader;
