import React from 'react';
import { render, screen } from '@testing-library/react';
import { WelcomeBanner } from './WelcomeBanner';

describe('<WelcomeBanner>', () => {
  it('should show the default greeting when no name has been provided', () => {
    render(<WelcomeBanner />);

    expect(screen.getByText('Hi there 👋'));
  });

  it('should show a custom greeting when name has been provided', () => {
    render(<WelcomeBanner name='Sam' />);

    expect(screen.getByText('Hi Sam 👋'));
  });
});
