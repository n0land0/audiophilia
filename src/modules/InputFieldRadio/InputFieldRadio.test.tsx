import { getByTestId, screen } from '@testing-library/react';

import { render } from '../../test';
import InputFieldRadio from '.';

describe('InputFieldRadio', () => {
  test('it renders a field name and input elements with labels by default', () => {
    const { getByTestId, container } = render(<InputFieldRadio />);
  });
  test('it renders one radio button for each field name passed', () => {
    const { getByTestId, container } = render(<InputFieldRadio />);
  });
  test('it becomes unchecked when another radio input is checked', () => {
    const { getByTestId, container } = render(<InputFieldRadio />);
  });
});
