import { REVIEWS } from '@/lib/constant';
import Image from 'next/image';
import React, { Fragment, PropsWithChildren } from 'react';
import GrainImage from '@/assets/images/grain.jpg';
import SectionHeader from '../SectionHeader';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RSC (React Server Component)
 */
const Testimonials = ({}: Props) => {
  return (
    <section className='mx-auto w-[95%] lg:w-[80%] flex flex-col testimonials'>
      <SectionHeader
        heading=' What Clients Say about Us'
        description="Don't just take our words for it. See What our clients have
        to say about our work"
      />

      <section>
        <ul>
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {REVIEWS.map((review) => (
                <li
                  aria-hidden={i === 1}
                  className='border border-white/15 flex flex-col gap-3 p-5 md:p-4 lg:p-6 rounded-xl bg-gray-800 bg-opacity-25 backdrop-blur-xl transition-all duration-300 relative overflow-hidden'
                  key={review.id}>
                  <div
                    className='absolute top-0 left-0 w-full h-full -z-10 bg-blend-darken opacity-5'
                    style={{ backgroundImage: `url(${GrainImage.src})` }}
                  />
                  <div className='flex items-center gap-3'>
                    <Image
                      src={review.img}
                      className='rounded-full object-cover size-10 md:size-12 object-center'
                      alt={review.username}
                      width={36}
                      height={36}
                    />

                    <div className='flex flex-col'>
                      <h5 className='font-semibold'>{review.name}</h5>
                      <p className='text-sm text-gray-400'>
                        {new Intl.DateTimeFormat('en-UK').format(
                          new Date(review.postedOn)
                        )}
                      </p>
                    </div>
                  </div>

                  <p>{review.review}</p>
                </li>
              ))}
            </Fragment>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Testimonials;
