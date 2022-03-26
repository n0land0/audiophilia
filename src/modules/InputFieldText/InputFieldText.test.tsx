import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { render } from '../../test';
import InputFieldText from '.';

const ParentForm = () => {
  const [fieldValue, setFieldValue] = useState('');

  return (
    <form onSubmit={jest.fn().mockImplementation((e) => e.preventDefault())}>
      <InputFieldText
        fieldName='test'
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
      />
    </form>
  );
};

// currently triggers an error
//  Error: Not implemented: HTMLFormElement.prototype.submit
// since it's not related to the text fields I'm not concerned

describe('InputFieldText', () => {
  beforeEach(() => {
    render(<ParentForm />);
  });

  test('it renders a field name and input element by default', () => {
    const HeadingEl = screen.getByRole('heading', { name: 'test' });
    const InputEl = screen.getByRole('textbox');

    expect(HeadingEl).toBeInTheDocument();
    expect(InputEl).toBeInTheDocument();
  });

  test('it displays typed user input', () => {
    const InputEl = screen.getByRole('textbox');

    expect(InputEl.value).toBe('');

    userEvent.type(InputEl, 'here is some text');
    expect(InputEl.value).toBe('here is some text');
  });

  test('it displays an error message upon invalid input', () => {
    const InputEl = screen.getByRole('textbox');

    expect(InputEl.value).toBe('');

    userEvent.type(InputEl, '$');

    const ErrorEl = screen.getByText('Wrong format');
    expect(ErrorEl).toBeInTheDocument();
  });

  test('it no longer displays an error message when input is corrected', () => {
    const InputEl = screen.getByRole('textbox');

    expect(InputEl.value).toBe('');

    userEvent.type(InputEl, '$');

    const ErrorEl = screen.getByText('Wrong format');
    expect(ErrorEl).toBeInTheDocument();

    userEvent.clear(InputEl);
    expect(ErrorEl).not.toBeInTheDocument();
  });
});
