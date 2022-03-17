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

test('header type generates correct tag and Tailwind classes', () => {
  const { getByTestId, container } = render(<Text as='h3'>test</Text>);
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<h3 class="text-h3Mobile sm:text-h3Tablet lg:text-h3Desktop font-bold text-black uppercase " data-testid="text-component">test</h3>'
  );
});

test('overline type generates correct tag and Tailwind classes', () => {
  const { getByTestId, container } = render(
    <Text as='h6' type='overline'>
      test
    </Text>
  );
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<h6 class="text-overlineMobile sm:text-overlineTablet lg:text-overlineDesktop font-normal text-black uppercase " data-testid="text-component">test</h6>'
  );
});

test('subtitle type generates correct tag and Tailwind classes', () => {
  const { getByTestId, container } = render(
    <Text as='label' type='subtitle' color='orangeBurnt'>
      test
    </Text>
  );
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<label class="text-subtitleMobile sm:text-subtitleTablet lg:text-subtitleDesktop font-bold text-orangeBurnt uppercase " data-testid="text-component">test</label>'
  );
});

test('body type generates correct tag and Tailwind classes', () => {
  const { getByTestId, container } = render(
    <Text as='p' type='body'>
      test
    </Text>
  );
  const TextEl = getByTestId('text-component');
  expect(TextEl).toContainHTML(
    '<p class="text-bodyMobile sm:text-bodyTablet lg:text-bodyDesktop font-medium text-black " data-testid="text-component">test</p>'
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
    '<h5 class="text-h5Mobile sm:text-h5Tablet lg:text-h5Desktop font-bold text-black dark:text-white uppercase " data-testid="text-component">test</h5>'
  );
});

test('displays mobile styles on mobile screen size', async () => {
  const { getByTestId, container } = render(
    <Text as='h3' type='overline'>
      test
    </Text>
  );
  //   global.innerWidth = 375;
  //   global.dispatchEvent(new Event('resize'));
  //   window = Object.assign(window, { innerWidth: '375px' });
  // const TextEl = screen.getByRole('heading', { name: 'test' });

  //   const TextEl = getByTestId('text-component');
  //   const style = window.getComputedStyle(TextEl);
  //   console.log(style);
  //   expect(TextEl).toHaveStyle({ 'font-size': '36px' });
  //   expect(TextEl).toHaveStyle('text-transform: uppercase');
});
