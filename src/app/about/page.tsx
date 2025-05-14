import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq/Container";
import PageHeader from "@/components/PageHeader";
import WhyUs from "@/components/WhyUs";
import React from "react";

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Drittle Tech | About Us',
  description: 'About at Drittle Tech | IT Services Company | Build Your IT Here | Software | MVP',
};


type Props = {};
/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const AboutPage = ({}: Props) => {
  return (
    <>
      <PageHeader
        heading={
          <>
            <span className="">About Drittle</span>{" "}
            <span className="bg-gradient-to-br from-sky-600 to-sky-700 inline-block px-1 py-1">
              Tech
            </span>
          </>
        }
        description='Drittle Tech aims to transform life and business with cutting-edge technology. Our passionate team is dedicated to exceeding client expectations through innovative and high-quality solutions, always pushing the limits of what&apos;s possible.'
      />

      <main className="flex flex-col gap-32 py-32">
        <WhyUs />
        <Faq />
        <ContactUs />
      </main>

      {/* <section className='responsiveContainer flex flex-col text-neutral-50 gap-8 py-10'>
        <h2 className='w-max mx-auto font-bold text-3xl md:text-4xl'>
          Our Expertise
        </h2>

        <p></p>

        <ul className='grid grid-cols-3 gap-5'>
          {SERVICES.map((service) => (
            <li
              key={service.id}
              className='flex flex-col w-full h-max border border-neutral-800 rounded-2xl shadow-lg p-5 gap-5 text-center'>
              <h4 className='text-2xl md:text-3xl font-semibold'>
                {service.heading}
              </h4>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
};

export default AboutPage;
