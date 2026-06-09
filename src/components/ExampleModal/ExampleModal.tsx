// ==============================================
// Example Modal (Radix Dialog)
// Radix gives behavior: focus trap, scroll lock, ESC to close, click overlay to close.
// You provide all the styling via SCSS Modules.
//
// Copy this folder as a template when creating new modals.
// ==============================================

import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';
import styles from './ExampleModal.module.scss';

type ExampleModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export const ExampleModal = ({ open, onClose, title, children }: ExampleModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          {children}
          <Dialog.Close className={styles.closeButton}>✕</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
