'use client';
import { PropsWithChildren, useState } from 'react';
import { UIContext } from './context';

const UIProvider = ({ children }: PropsWithChildren) => {
  const [isContactModalVisible, setIsContactModalVisible] = useState(false);

  const openContactModal = () => setIsContactModalVisible(true);
  const closeContactModal = () => setIsContactModalVisible(false);

  return (
    <UIContext.Provider
      value={{
        closeContactModal,
        openContactModal,
        isContactModalVisible,
      }}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
