import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextInput } from './lib/TextInput';

const meta: Meta = {
  title: 'Components/TextInput',
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return <TextInput label="Name" value={value} onChange={setValue} />;
  },
};
