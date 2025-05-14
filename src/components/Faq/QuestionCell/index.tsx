'use client';
import { cn } from '@/lib/functions';
import { Faq } from '@/types';
import React, { PropsWithChildren, useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import GrainImage from '@/assets/images/grain.jpg';

type Props = {} & PropsWithChildren & Faq;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const QuestionCell = ({ answer, question }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li
      onClick={() => setShowAnswer((lst) => !lst)}
      className='border-white/15 border bg-opacity-25 bg-gray-700 relative rounded-xl px-4 py-3 flex flex-col gap-2 self-start'>
      <div
        className='absolute top-0 left-0 w-full h-full -z-10 bg-blend-darken opacity-5'
        style={{ backgroundImage: `url(${GrainImage.src})` }}
      />

      <div className='flex items-center justify-between w-full gap-5'>
        <h5 className='text-base'>{question}</h5>

        <button className={cn('plus-icon', showAnswer && 'active')} />
      </div>

      <AnimatePresence mode='wait'>
        {showAnswer && (
          <m.p className='origin-top text-sm text-white/70'>{answer}</m.p>
        )}
      </AnimatePresence>
    </li>
  );
};

export default QuestionCell;
