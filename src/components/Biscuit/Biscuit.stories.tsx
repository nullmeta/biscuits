import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Biscuit } from './Biscuit';

const meta = {
  title: 'Components/Biscuit',
  component: Biscuit,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Biscuit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    children: 'Plain Biscuit Content',
    variant: 'plain',
  },
};

export const Chocolate: Story = {
  args: {
    children: 'Chocolate Biscuit Content',
    variant: 'chocolate',
  },
};

export const Sugar: Story = {
  args: {
    children: 'Sugar Biscuit Content',
    variant: 'sugar',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Biscuit Content',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Biscuit Content',
    size: 'large',
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
      <div>
        <h3>Complex Content</h3>
        <p>This is a paragraph inside the biscuit.</p>
        <button>Click me!</button>
      </div>
    ),
  },
}; 