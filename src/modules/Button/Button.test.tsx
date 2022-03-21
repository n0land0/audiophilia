import { getByTestId, screen } from '@testing-library/react';

import { render } from '../../test';
import Button from '.';

test('component renders', () => {
  render(<Button>test</Button>);
  const ButtonEl = screen.getByRole('button', { name: 'test' });
  expect(ButtonEl).toBeInTheDocument();
});

test('standard width displays correctly', () => {
  render(<Button width='standard'>test</Button>);
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

// test('displays correct color', () => {
//   const { getByTestId, container } = render(
//     <Text as='h1' color='orangeBurnt'>
//       test
//     </Text>
//   );
//   const TextEl = screen.getByRole('heading', { name: 'test' });
//   expect(TextEl).toHaveStyle('color: rgb(216 125 74 / var(--tw-text-opacity))');
// });

// test('displays correct text content', () => {
//   render(<Text as='h2'>test</Text>);
//   const TextEl = screen.getByRole('heading', { name: 'test' });
//   expect(TextEl).toHaveTextContent('test');
// });

// test('header type generates correct tag and Tailwind classes', () => {
//   const { getByTestId, container } = render(<Text as='h3'>test</Text>);
//   const TextEl = getByTestId('text-component');
//   expect(TextEl).toContainHTML(
//     '<h3 class="text-h3Mobile sm:text-h3Tablet lg:text-h3Desktop font-bold text-black uppercase " data-testid="text-component">test</h3>'
//   );
// });

// test('overline type generates correct tag and Tailwind classes', () => {
//   const { getByTestId, container } = render(
//     <Text as='h6' type='overline'>
//       test
//     </Text>
//   );
//   const TextEl = getByTestId('text-component');
//   expect(TextEl).toContainHTML(
//     '<h6 class="text-overlineMobile sm:text-overlineTablet lg:text-overlineDesktop font-normal text-black uppercase " data-testid="text-component">test</h6>'
//   );
// });

// test('subtitle type generates correct tag and Tailwind classes', () => {
//   const { getByTestId, container } = render(
//     <Text as='label' type='subtitle' color='orangeBurnt'>
//       test
//     </Text>
//   );
//   const TextEl = getByTestId('text-component');
//   expect(TextEl).toContainHTML(
//     '<label class="text-subtitleMobile sm:text-subtitleTablet lg:text-subtitleDesktop font-bold text-orangeBurnt uppercase " data-testid="text-component">test</label>'
//   );
// });

// test('body type generates correct tag and Tailwind classes', () => {
//   const { getByTestId, container } = render(
//     <Text as='p' type='body'>
//       test
//     </Text>
//   );
//   const TextEl = getByTestId('text-component');
//   expect(TextEl).toContainHTML(
//     '<p class="text-bodyMobile sm:text-bodyTablet lg:text-bodyDesktop font-medium text-black " data-testid="text-component">test</p>'
//   );
// });

// test('displays correct darkmode color', () => {
//   const { getByTestId, container } = render(
//     <Text as='h5' darkColor='white'>
//       test
//     </Text>
//   );
//   const TextEl = getByTestId('text-component');
//   expect(TextEl).toContainHTML(
//     '<h5 class="text-h5Mobile sm:text-h5Tablet lg:text-h5Desktop font-bold text-black dark:text-white uppercase " data-testid="text-component">test</h5>'
//   );
// });

// test('displays mobile styles on mobile screen size', async () => {
//   const { getByTestId, container } = render(
//     <Text as='h3' type='overline'>
//       test
//     </Text>
//   );
// });
