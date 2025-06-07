import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './lib/Tabs';

const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  args: {
    tabs: [
      { label: 'One', content: <div>Tab one</div> },
      { label: 'Two', content: <div>Tab two</div> },
    ],
  },
};
