import { getByTestId, screen } from '@testing-library/react';

import { render } from '../../test';
import InputFieldText from '.';

describe('InputFieldText', () => {
  test('it renders a field name and input element by default', () => {
    const { getByTestId, container } = render(<InputFieldText />);
  });
  test('it displays typed user input', () => {
    const { getByTestId, container } = render(<InputFieldText />);
  });
  test('it displays an error message upon invalid input', () => {
    const { getByTestId, container } = render(<InputFieldText />);
  });
  test('it no longer displays an error message when input is corrected', () => {
    const { getByTestId, container } = render(<InputFieldText />);
  });
});
