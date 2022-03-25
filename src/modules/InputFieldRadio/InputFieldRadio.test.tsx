import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { render } from '../../test';
import InputFieldRadio from '.';

const ParentForm = ({ children }: any) => {
  const [fieldValue, setFieldValue] = useState('');

  return (
    <form onSubmit={jest.fn().mockImplementation((e) => e.preventDefault())}>
      <InputFieldRadio
        fieldName='test'
        options={['test1', 'test2', 'test3']}
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
      />
    </form>
  );
};

// currently triggers an error
//  Error: Not implemented: HTMLFormElement.prototype.submit
// since it's not related to the radio buttons I'm not concerned

describe('InputFieldRadio', () => {
  beforeEach(() => {
    render(<ParentForm />);
  });

  test('it renders a field name and input elements with labels by default', () => {
    const HeadingEl = screen.getByRole('heading', { name: 'test' });
    const InputEl = screen.getAllByRole('radio')[0];
    const LabelEl = document.querySelectorAll('label')[0];

    expect(HeadingEl).toBeInTheDocument();
    expect(InputEl).toBeInTheDocument();
    expect(LabelEl).toBeInTheDocument();
  });

  test('it renders one radio button and label for each field name passed', () => {
    const InputEls = screen.getAllByRole('radio');
    const LabelEls = document.querySelectorAll('label');

    expect(InputEls).toHaveLength(3);
    expect(LabelEls).toHaveLength(3);
  });

  test('it becomes unchecked when another radio input is checked', () => {
    const FormEl = document.querySelector('form');
    const [firstRadioBtn, secondRadioBtn, thirdRadioBtn] =
      screen.getAllByRole('radio');

    userEvent.click(firstRadioBtn);
    expect(FormEl).toHaveFormValues({
      test: 'test1',
    });

    userEvent.click(secondRadioBtn);
    expect(FormEl).toHaveFormValues({
      test: 'test2',
    });

    userEvent.click(thirdRadioBtn);
    expect(FormEl).toHaveFormValues({
      test: 'test3',
    });
  });
});
