import { FAQS } from '@/lib/constant';
import React, { PropsWithChildren } from 'react';
import QuestionCell from '../QuestionCell';
import SectionHeader from '@/components/SectionHeader';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Faq = ({}: Props) => {
  return (
    <section className='responsiveContainer flex flex-col'>
      <SectionHeader
        description='Find Detailed Answers to Your Questions About Our Services and Processes'
        heading='Frequently Asked Questions'
      />

      <ul className='grid gap-3 lg:w-[80%] w-full lg:mx-auto'>
        {FAQS.map((faq) => (
          <QuestionCell {...faq} key={faq.id} />
        ))}
      </ul>
    </section>
  );
};

export default Faq;
