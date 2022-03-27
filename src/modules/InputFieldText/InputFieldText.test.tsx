import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { render } from '../../test';
import InputFieldText from '.';

const ParentForm = () => {
  const [textValue, setTextValue] = useState('');
  const [telValue, setTelValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  return (
    <form onSubmit={jest.fn().mockImplementation((e) => e.preventDefault())}>
      <InputFieldText
        fieldName='text input'
        fieldValue={textValue}
        setFieldValue={setTextValue}
      />
      <InputFieldText
        fieldName='phone input'
        fieldValue={telValue}
        setFieldValue={setTelValue}
        fieldType={'tel'}
      />
      <InputFieldText
        fieldName='email input'
        fieldValue={emailValue}
        setFieldValue={setEmailValue}
        fieldType={'email'}
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
    const [HeadingElText, HeadingElTel, HeadingElEmail] =
      screen.getAllByRole('heading');
    const [InputElText, InputElTel, InputElEmail] =
      screen.getAllByRole('textbox');

    expect(HeadingElText).toBeInTheDocument();
    expect(HeadingElTel).toBeInTheDocument();
    expect(HeadingElEmail).toBeInTheDocument();

    expect(InputElText).toBeInTheDocument();
    expect(InputElTel).toBeInTheDocument();
    expect(InputElEmail).toBeInTheDocument();
  });

  test('it displays typed user input', () => {
    const InputElText = screen.getByPlaceholderText('Insert your text input');
    const InputElTel = screen.getByPlaceholderText('Insert your phone input');
    const InputElEmail = screen.getByPlaceholderText('Insert your email input');

    expect(InputElText.value).toBe('');
    expect(InputElTel.value).toBe('');
    expect(InputElEmail.value).toBe('');

    userEvent.type(InputElText, 'here is some text');
    expect(InputElText.value).toBe('here is some text');

    userEvent.type(InputElTel, '1234567890');
    expect(InputElTel.value).toBe('1234567890');

    userEvent.type(InputElEmail, 'tightemail@example.com');
    expect(InputElEmail.value).toBe('tightemail@example.com');
  });

  test('it displays an error message upon invalid text input', () => {
    const InputElText = screen.getByPlaceholderText('Insert your text input');

    expect(InputElText.value).toBe('');

    userEvent.type(InputElText, '$');
    userEvent.tab();

    const ErrorEl = screen.getByText('Wrong format');
    expect(ErrorEl).toBeInTheDocument();
  });

  test('it displays an error message upon invalid phone input', () => {
    const InputElTel = screen.getByPlaceholderText('Insert your phone input');

    expect(InputElTel.value).toBe('');

    userEvent.type(InputElTel, 'a');
    userEvent.tab();

    const ErrorEl = screen.getByText('Wrong format');
    expect(ErrorEl).toBeInTheDocument();
  });

  test('it displays an error message upon invalid text input', () => {
    const InputElEmail = screen.getByPlaceholderText('Insert your email input');

    expect(InputElEmail.value).toBe('');

    userEvent.type(InputElEmail, 'hey@email.toomanycharacters');
    userEvent.tab();

    const ErrorEl = screen.getByText('Wrong format');
    expect(ErrorEl).toBeInTheDocument();
  });

  test('it no longer displays an error message when input is corrected', () => {
    const InputEl = screen.getAllByRole('textbox')[0];

    expect(InputEl.value).toBe('');

    userEvent.type(InputEl, '$');
    userEvent.tab();

    const ErrorEl = screen.getByText('Wrong format');
    expect(ErrorEl).toBeInTheDocument();

    userEvent.clear(InputEl);
    expect(ErrorEl).not.toBeInTheDocument();
  });
});
