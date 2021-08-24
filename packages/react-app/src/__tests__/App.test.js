import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from '../App';

test('renders the app wrapper', async () => {
  await act(async () => {
    render(<App />);
    await Promise.resolve();
  });
  const appWrappper = screen.getByTestId('app-wrapper');

  expect(appWrappper).toBeInTheDocument();
});
