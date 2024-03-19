import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TopMenu } from './TopMenu';

const meta: Meta<typeof TopMenu> = {
  title: 'Components/TopMenu',
  component: TopMenu,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
