import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './lib/Modal';

const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setOpen(true)}>Open</button>
        <Modal open={open} headingText="Example Modal" onClose={() => setOpen(false)}>
          Hello world
        </Modal>
      </div>
    );
  },
};
