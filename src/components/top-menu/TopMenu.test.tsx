import React from 'react';
import { render, screen } from '@testing-library/react';
import { TopMenu } from './TopMenu';

describe('<TopMenu>', () => {
  it('should render a sign out link when the user is logged in', () => {
    render(<TopMenu loggedIn={true} />);

    expect(screen.getByRole('link', { name: 'Sign out' })).toBeInTheDocument();
  });

  it('should render a sign in link when the user is logged out', () => {
    render(<TopMenu loggedIn={false} />);

    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();
  });

  it('should render an avatar if an image URL is provided and the user is logged in', () => {
    render(
      <TopMenu
        loggedIn={true}
        avatar='https://cdn.somecdn.com/images/avatar.png'
      />,
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
