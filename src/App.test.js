import { render, screen } from '@testing-library/react';
import Crud from './Crud';
import App from './App';

test('renders learn react link', () => {
  render(<Crud />);
  const linkElement = screen.getByText(/Logged in as /i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link 1', () => {
  render(<Crud />);
  const linkElement = screen.getByText(/example@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
});
 