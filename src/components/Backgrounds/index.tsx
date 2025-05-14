'use client';
import GrainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react';

const Orbit = ({
  children,
  className,
  size,
  rotation,
}: ComponentPropsWithoutRef<'div'> & { size: string; rotation: number }) => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
      <div className='animate-spin [animation-duration:150s]'>
        <div
          className='relative rounded-full'
          style={{ width: size, height: size, rotate: `${rotation}deg` }}>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const StarBackground = () => {
  return (
    <>
      <div
        className='absolute top-0 left-0 w-full h-full -z-10 bg-blend-darken opacity-5 inset-0 pointer-events-none'
        style={{ backgroundImage: `url(${GrainImage.src})` }}
      />
      {/* CIRCULAR PATTERN */}
      <div className='size-[450px] headerBgGr' />
      <div className='size-[750px] headerBgGr' />
      <div className='size-[1050px] headerBgGr' />
      <div className='size-[1350px] headerBgGr' />
      <div className='size-[1650px] headerBgGr' />
      <div className='size-[1950px] headerBgGr' />

      <Orbit size='450px' rotation={30}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='750px' rotation={135}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='1050px' rotation={230}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='1350px' rotation={260}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='1650px' rotation={90}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='1950px' rotation={280}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='450px' rotation={250}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='750px' rotation={45}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='1050px' rotation={30}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='1350px' rotation={60}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='1650px' rotation={45}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
      <Orbit size='1950px' rotation={80}>
        <div className='size-3 rounded-full bg-sky-300 opacity-25' />
      </Orbit>
    </>
  );
};

export const DottedBackground = () => {
  const cellHeight = 15;
  const cellWidth = 15;
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const EL = overlayRef.current;
    setCols(Math.round(EL.clientWidth / cellWidth));
    setRows(Math.round(EL.clientHeight / cellHeight));
  }, []);

  return (
    <>
      <div
        className='absolute top-0 left-0 w-full h-full -z-10 bg-blend-darken opacity-5 inset-0'
        style={{ backgroundImage: `url(${GrainImage.src})` }}
      />

      <div
        ref={overlayRef}
        className='absolute top-0 left-0 w-full h-full -z-[1] inset-0'>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={`row-${i}`} className='flex'>
            {Array.from({ length: cols }).map((_, i) => (
              <div
                key={`col-${i}`}
                style={{
                  width: `${cellWidth}px`,
                  height: `${cellHeight}px`,
                }}
                className='grid place-items-center'>
                <div className='size-1/4 rounded-full bg-sky-500/15' />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

