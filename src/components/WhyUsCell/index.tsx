'use client';
import { cn } from '@/lib/functions';
import React, { PropsWithChildren, useState } from 'react';
import { IconType } from 'react-icons';

type Props = {
  Icon?: IconType;
  heading: string;
  description: string;
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const WhyUsCell = ({ description, heading, Icon }: Props) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <li className='flex flex-col gap-2 self-start'>
      <div
        className={cn(
          'flex flex-col gap-4 transition-all',
          !showFullContent &&
            '[mask-image:linear-gradient(to_bottom,white_50%,transparent)]'
        )}>
        {Icon && <Icon className='h-14 w-auto mr-auto text-sky-300 shrink-0' />}
        <h4 className='text-xl md:text-2xl font-semibold text-gray-100'>
          {heading}
        </h4>
        <p
          className={cn(
            'text-gray-400 transition-all',
            showFullContent ? 'h-max' : 'h-16 overflow-y-clip'
          )}>
          {description}
        </p>
      </div>
      <button
        onClick={() => setShowFullContent((lst) => !lst)}
        type='button'
        className='text-sky-300 font-semibold self-start z-10 relative cursor-pointer'>
        {showFullContent ? 'See Less' : 'See More'}
      </button>
    </li>
  );
};

export default WhyUsCell;
