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

describe('InputFieldText', () => {
  beforeEach(() => {
    render(<ParentForm />);
  });

  test.skip('it renders a field name and input element by default', () => {
    expect(HeadingEl).toBeInTheDocument();
    expect(InputEl).toBeInTheDocument();
  });

  test.skip('it displays typed user input', () => {
    expect(InputEl.value).toBe('');
  });

  test.skip('it displays an error message upon invalid input', () => {
    // type
    expect(ErrorEl).toBeInTheDocument();
  });

  test.skip('it no longer displays an error message when input is corrected', () => {
    // type
    expect(ErrorEl).toBeInTheDocument();
    // remove
    expect(ErrorEl).not.toBeInTheDocument();
  });
});
