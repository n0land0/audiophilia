import { getByTestId, screen } from '@testing-library/react';

import { render } from '../../test';
import Button from '.';

describe('Button', () => {
  test('component renders', () => {
    render(<Button type='alt1'>test</Button>);
    const ButtonEl = screen.getByRole('button', { name: 'test' });
    expect(ButtonEl).toBeInTheDocument();
  });

  test('standard width displays correctly', () => {
    render(
      <Button type='category' width='standard'>
        test
      </Button>
    );
    const ButtonEl = screen.getByRole('button', { name: 'test' });
    expect(ButtonEl).toHaveClass('w-40 h-12');
  });

  test('form width displays correctly', () => {
    render(
      <Button type='main' width='form'>
        test
      </Button>
    );
    const ButtonEl = screen.getByRole('button', { name: 'test' });
    expect(ButtonEl).toHaveClass('w-full h-12');
  });

  test('main style colors display correctly', () => {
    render(<Button type='main'>test</Button>);
    const ButtonEl = screen.getByRole('button', { name: 'test' });
    expect(ButtonEl).toHaveClass(
      'text-white hover:text-white bg-orangeBurnt hover:bg-orangeLight'
    );
  });

  test('category style colors display correctly', () => {
    render(<Button type='category'>test</Button>);
    const ButtonEl = screen.getByRole('button', { name: 'test' });
    expect(ButtonEl).toHaveClass(
      'text-black/50 hover:text-orangeBurnt bg-transparent hover:bg-transparent'
    );
  });

  test('alt 1 style colors display correctly', () => {
    render(<Button type='alt1'>test</Button>);
    const ButtonEl = screen.getByRole('button', { name: 'test' });
    expect(ButtonEl).toHaveClass(
      'text-white hover:text-white bg-black hover:bg-grayDark'
    );
  });

  test('alt 2 style colors display correctly', () => {
    render(<Button type='alt2'>test</Button>);
    const ButtonEl = screen.getByRole('button', { name: 'test' });
    expect(ButtonEl).toHaveClass(
      'text-black hover:text-white bg-transparent hover:bg-black'
    );
  });
});
