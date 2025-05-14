import React, { PropsWithChildren } from 'react';
import SectionHeader from '../SectionHeader';
import GrainImage from '@/assets/images/grain.jpg';
import Image from 'next/image';
import { IoIosCheckmarkCircleOutline, IoMdArrowForward } from 'react-icons/io';
import { cn } from '@/lib/functions';
import Link from 'next/link';
import getAllProject from '@/app/api/v1/project/routes/get-all.route';

type Props = {
  showAll?: boolean;
} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Projects = async ({ showAll = false }: Props) => {
  const projects = await getAllProject(showAll);

  return (
    <section className='responsiveContainer flex flex-col'>
      <SectionHeader
        heading='Projects Delivered'
        description='Here are some of the projects which are live made by our team of developers'
      />

      <section className='grid gap-8'>
        {projects.map((project, i) => (
          <article
            key={project._id}
            className={cn(
              'relative shadow-[0_0_45px] shadow-gray-950/20 bg-gray-800 flex gap-5 justify-between overflow-clip rounded-3xl inset-0 md:flex-row flex-col-reverse',
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            )}>
            <div
              className='absolute top-0 left-0 w-full h-full bg-blend-darken opacity-5 pointer-events-none'
              style={{ backgroundImage: `url(${GrainImage.src})` }}
            />
            <section className='px-6 md:pl-10 pb-8 md:py-8 lg:p-10 xl:p-14 2xl:p-20 flex flex-col gap-6 flex-1'>
              <h2 className='text-4xl font-semibold font-serif'>
                {project.name}
              </h2>
              <p className='text-sm text-white/60 -mt-4 lg:w-[70%]'>
                {project.description}
              </p>

              <ul className='flex flex-col text-white/80 -mt-1 text-sm gap-1'>
                {project.points.map((point, i) => (
                  <li key={i} className='flex items-start gap-1'>
                    <IoIosCheckmarkCircleOutline className='h-5 w-auto text-emerald-400 shrink-0' />{' '}
                    <p>{point}</p>
                  </li>
                ))}
              </ul>

              <Link
                href={project.liveUrl}
                className='rounded-lg w-full justify-center sm:w-max mt-4 h-12 md:h-10 px-6 bg-white/90 text-gray-950 flex items-center gap-1.5 font-medium text-base md:text-sm hover:bg-white transition-all'>
                Visit Live Site{' '}
                <IoMdArrowForward className='-rotate-45 h-4 w-auto' />
              </Link>
            </section>

            <figure className='md:w-[45%] lg:w-1/2 2xl:w-[45%] w-full aspect-video'>
              <Image
                src={project.imageUrl}
                alt='img'
                className='object-cover object-center w-full h-full'
                height={900}
                width={1000}
              />
            </figure>
          </article>
        ))}
      </section>

      {!showAll && (
        <Link
          href='/projects'
          className='btn btn--border-fill-color mt-10 self-center'>
          View All Projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
