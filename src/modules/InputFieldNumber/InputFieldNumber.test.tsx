import { getByTestId, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

import { render } from '../../test';
import InputFieldNumber from '.';

const ParentForm = ({ children }: any) => {
  const [fieldValue, setFieldValue] = useState(0);

  return (
    <form>
      <InputFieldNumber
        fieldValue={fieldValue}
        setFieldValue={setFieldValue}
        fieldName={'test'}
        size='detail'
      />
    </form>
  );
};

describe('InputFieldNumber', () => {
  test('it renders a field quantity and increment/decrement buttons by default', () => {
    render(<ParentForm />);
    const InputEl = screen.getByRole('spinbutton');
    const ButtonEl = screen.getAllByRole('button');

    expect(InputEl).toHaveAttribute('type', 'number');
    expect(ButtonEl).toHaveLength(2);
  });

  test('it increments quantity when the corresponding button is clicked', () => {
    render(<ParentForm />);
    const InputEl = screen.getByRole('spinbutton');
    const IncButton = screen.getAllByRole('button')[1];

    expect(InputEl).toHaveValue(0);

    userEvent.click(IncButton);
    expect(InputEl).toHaveValue(1);
  });

  test('it decrements quantity when the corresponding button is clicked', () => {
    render(<ParentForm />);
    const InputEl = screen.getByRole('spinbutton');
    const DecButton = screen.getAllByRole('button')[0];
    const IncButton = screen.getAllByRole('button')[1];

    userEvent.click(IncButton);
    expect(InputEl).toHaveValue(1);

    userEvent.click(DecButton);
    expect(InputEl).toHaveValue(0);
  });

  test('it does not decrement past 0', () => {
    render(<ParentForm />);
    const InputEl = screen.getByRole('spinbutton');
    const DecButton = screen.getAllByRole('button')[0];
    const IncButton = screen.getAllByRole('button')[1];

    userEvent.click(IncButton);
    expect(InputEl).toHaveValue(1);

    userEvent.click(DecButton);
    expect(InputEl).toHaveValue(0);

    userEvent.click(DecButton);
    expect(InputEl).toHaveValue(0);
  });
});
