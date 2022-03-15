import { getByTestId, screen } from '@testing-library/react';

import { render } from '../../test';
import Text from '.';

test('component renders', () => {
  const { getByTestId, container } = render(<Text as='h1' />);
  const TextEl = getByTestId('text-component');
  expect(TextEl).toBeInTheDocument();
});

test('displays correct color', () => {
  const { getByTestId, container } = render(
    <Text as='h1' color='orangeBurnt'>
      test
    </Text>
  );
  const TextEl = getByTestId('text-component');
  expect(TextEl).toHaveStyle('color: rgb(216 125 74 / var(--tw-text-opacity))');
});

test('displays correct text content', () => {
  render(<Text as='h1'>test</Text>);
  const TextEl = screen.getByRole('heading', { name: 'test' });
  expect(TextEl).toHaveTextContent('test');
});

test('generates correct tag and Tailwind classes', () => {
  const { getByTestId, container } = render(
    <Text as='p' style='body'>
      test
    </Text>
  );
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<p class="text-body font-medium text-black " data-testid="text-component">test</p>'
  );
});
