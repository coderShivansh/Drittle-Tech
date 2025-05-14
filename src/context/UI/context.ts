import { TUIContext } from '@/types';
import { createContext } from 'react';

export const UIContext = createContext<TUIContext>({
  isContactModalVisible: false,
  openContactModal: () => {},
  closeContactModal: () => {},
});
