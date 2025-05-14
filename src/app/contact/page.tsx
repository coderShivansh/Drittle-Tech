import ContactInputField from '@/components/ContactInputField';
import Faq from '@/components/Faq/Container';
import PageHeader from '@/components/PageHeader';
import { CONTACT_INPUT_FIELDS } from '@/lib/constant';
import React from 'react';
import type { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';
export const metadata: Metadata = {
  title: 'Drittle Tech | Contact',
  description:
    'Contact Drittle Tech | IT Services Company | Build Your IT Here | Software | MVP',
};

type Props = {};

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const ContactPage = async ({}: Props) => {
  return (
    <>
      <PageHeader
        heading={'Get In Touch with our team'}
        description='We have the team know how to help you make you idea come to life.'
      />

      <main className='flex flex-col gap-32 py-32'>
        
        <section className='flex flex-col gap-10 responsiveContainer'>
          <h2 className='font-serif text-4xl font-bold mt-5 text-center'>
            Contact Us
          </h2>
          <form
            id='contactForm'
            className='flex flex-col gap-5 rounded-2xl border p-8 bg-gray-800 border-gray-700 bg-opacity-50 backdrop-blur-lg w-[90%] mx-auto'>
            {CONTACT_INPUT_FIELDS.map((inp) => (
              <ContactInputField {...inp} key={inp.id} />
            ))}

            <button
              type='submit'
              className='px-6 h-12 rounded-xl bg-gray-950 flex items-center gap-2 font-medium ml-auto mt-3'>
              Send
            </button>
          </form>
        </section>
       <Testimonials />
        <Faq />
      </main>
    </>
  );
};

export default ContactPage;
