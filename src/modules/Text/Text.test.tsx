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
  const TextEl = screen.getByRole('heading', { name: 'test' });
  expect(TextEl).toHaveStyle('color: rgb(216 125 74 / var(--tw-text-opacity))');
});

test('displays correct text content', () => {
  render(<Text as='h2'>test</Text>);
  const TextEl = screen.getByRole('heading', { name: 'test' });
  expect(TextEl).toHaveTextContent('test');
});

// this also tests default styles generation
test('header style generates correct tag and Tailwind classes', () => {
  const { getByTestId, container } = render(<Text as='h3'>test</Text>);
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<h3 class="text-h3 font-bold text-black uppercase " data-testid="text-component">test</h3>'
  );
});

test('overline style generates correct tag and Tailwind classes', () => {
  const { getByTestId, container } = render(
    <Text as='h6' style='overline'>
      test
    </Text>
  );
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<h6 class="text-overline font-normal text-black uppercase " data-testid="text-component">test</h6>'
  );
});

test('subtitle style generates correct tag and Tailwind classes', () => {
  const { getByTestId, container } = render(
    <Text as='label' style='subtitle' color='orangeBurnt'>
      test
    </Text>
  );
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<label class="text-subtitle font-bold text-orangeBurnt uppercase " data-testid="text-component">test</label>'
  );
});

test('body style generates correct tag and Tailwind classes', () => {
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

test('displays correct darkmode color', () => {
  const { getByTestId, container } = render(
    <Text as='h5' darkColor='white'>
      test
    </Text>
  );
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<h5 class="text-h5 font-bold text-black dark:text-white uppercase " data-testid="text-component">test</h5>'
  );
});
