import { render } from '@testing-library/react';
import { App } from './App';

jest.mock('./App');

it('renders learn react link', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
