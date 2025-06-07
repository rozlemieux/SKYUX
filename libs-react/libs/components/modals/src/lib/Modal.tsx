import React from 'react';
import './modal.scss';

export interface ModalProps {
  open: boolean;
  headingText?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, headingText, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="sky-modal-backdrop" onClick={onClose}>
      <div className="sky-modal" onClick={e => e.stopPropagation()}>
        {headingText && (
          <div className="sky-modal-header">
            <h2>{headingText}</h2>
            <button className="sky-modal-close" aria-label="Close" onClick={onClose}>
              &times;
            </button>
          </div>
        )}
        <div className="sky-modal-body">{children}</div>
      </div>
    </div>
  );
};
