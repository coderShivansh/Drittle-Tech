import ContactUs from '@/components/ContactUs';
import PageHeader from '@/components/PageHeader';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import React from 'react';

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Drittle Tech | Projects',
  description:
    'Projects of Drittle Tech | IT Services Company | Build Your IT Here | Software | MVP',
};

type Props = {};
/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const ProjectPage = ({}: Props) => {
  return (
    <>
      <PageHeader heading='Project Gallery' description='Gallery of projects done by drittle tech' />
      <main className='py-32 flex flex-col gap-32'>
        <Projects showAll={true} />
        <Testimonials />
        {/* <Services /> */}
        <ContactUs />
      </main>
    </>
  );
};

export default ProjectPage;
