import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renderiza el login', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Ingreso/i);
  expect(linkElement).toBeInTheDocument();
});
