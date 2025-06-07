import React from 'react';
import './text-input.scss';

export interface TextInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => (
  <label className="sky-text-input">
    {label && <span>{label}</span>}
    <input value={value} onChange={e => onChange(e.target.value)} />
  </label>
);
