import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the app wrapper', () => {
  const { getByTestId } = render(<App />);
  const appWrappper = getByTestId('app-wrapper');

  expect(appWrappper).toBeInTheDocument();
});
