'use client';
import { cn } from '@/lib/functions';
import React, { useEffect, useRef, useState } from 'react';
import { BsCursorFill } from 'react-icons/bs';
import { PiHandPointingFill } from 'react-icons/pi';

type Props = {};

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const Cursor = ({}: Props) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const clickTimeout = useRef<NodeJS.Timeout>();
  const [showCursorPointer, setShowCursorPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      e.preventDefault();
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

      const EL = e.target as HTMLElement;
      const isButtonEl = EL.closest('button') || EL.closest('a');

      setShowCursorPointer(isButtonEl ? true : false);
    };

    const onMouseClick = (e: MouseEvent) => {
      // setShowCursorPointer(true);
      // clearTimeout(clickTimeout.current);
      // clickTimeout.current = setTimeout(() => {
      //   setShowCursorPointer(false);
      // }, 200);
    };

    document.documentElement.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('click', onMouseClick);

    return () => {
      document.documentElement.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('click', onMouseClick);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ transform: `translate` }}
      className={cn(
        'fixed z-[999] top-0 left-0 w-max h-max pointer-events-none mix-blend-difference'
      )}>
      <span className='opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      {!showCursorPointer ? (
        <BsCursorFill className='text-primary h-7 -rotate-90 w-auto cursorShadow' />
      ) : (
        <PiHandPointingFill className='text-primary h-7 w-auto cursorShadow' />
      )}
    </div>
  );
};

export default Cursor;
