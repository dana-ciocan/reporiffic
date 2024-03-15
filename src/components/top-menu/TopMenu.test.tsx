import React from 'react';
import { render, screen } from '@testing-library/react';
import { TopMenu } from './TopMenu';

describe('<TopMenu>', () => {
  it('should render a log out link', () => {
    render(<TopMenu />);

    expect(screen.getByRole('link', { name: 'Sign out' })).toBeInTheDocument();
  });
});
