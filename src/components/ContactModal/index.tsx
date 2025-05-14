'use client';
import React, { PropsWithChildren, useContext } from 'react';
import SectionHeader from '../SectionHeader';
import { UIContext } from '@/context/UI/context';
import ContactInputField from '../ContactInputField';
import { CONTACT_INPUT_FIELDS } from '@/lib/constant';
import { RiSendPlaneFill } from 'react-icons/ri';

type Props = {} & PropsWithChildren;

/**
 * @param {Props} props
 * @return RCC (React Client Component)
 */
const ContactModal = ({}: Props) => {
  const { isContactModalVisible, closeContactModal } = useContext(UIContext);

  if (!isContactModalVisible) return <></>;

  return (
    <div className='fixed top-0 left-0 w-full h-[100dvh] grid place-items-center z-[999] isolate'>
      <div
        onClick={closeContactModal}
        className='w-full h-full absolute top-0 left-0 bg-black/40 z-[-1]'
      />

      <div className='w-[650px] border-0 border-white/20 bg-gray-900 p-8 rounded-2xl'>
        <SectionHeader description='' heading='Get In Touch' />

        <form action='' className='flex flex-col gap-5 mx-auto w-full'>
          {CONTACT_INPUT_FIELDS.map((inp) => (
            <ContactInputField {...inp} key={inp.id} />
          ))}

          <button
            type='submit'
            className='py-2 px-6 rounded-lg bg-gray-950 text-white self-end text-sm font-medium tracking-wide flex items-center gap-1 sendBtn'>
            Send
            <RiSendPlaneFill className='transition-all' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
