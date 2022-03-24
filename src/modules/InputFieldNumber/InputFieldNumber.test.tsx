import { getByTestId, screen } from '@testing-library/react';

import { render } from '../../test';
import InputFieldNumber from '.';

describe('InputFieldNumber', () => {
  test('it renders a field quantity and increment/decrement buttons by default', () => {
    const { getByTestId, container } = render(<InputFieldNumber />);
  });
  test('it increments quantity when the corresponding button is clicked', () => {
    const { getByTestId, container } = render(<InputFieldNumber />);
  });
  test('it decrements quantity when the corresponding button is clicked', () => {
    const { getByTestId, container } = render(<InputFieldNumber />);
  });
  test('it does not decrement past 0', () => {
    const { getByTestId, container } = render(<InputFieldNumber />);
  });
});
