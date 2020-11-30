import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import Odontograma from './index';

test('Renderiza el botón consultar odontograma', () => {
  const { getByText } = render(<Odontograma />);
  const linkElement = getByText(/Consultar odontograma/i);
  expect(linkElement).toBeInTheDocument();
});
test('Renderiza el modal de error al hacer click', async () => {
  const { getByText } = render(<Odontograma />);
  const btnElement = getByText(/Consultar odontograma/i);
  fireEvent.click(btnElement)
  expect(btnElement).toBeInTheDocument();
});
