import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { WelcomeBanner } from './WelcomeBanner';

const meta: Meta<typeof WelcomeBanner> = {
  title: 'Components/WelcomeBanner',
  component: WelcomeBanner,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
