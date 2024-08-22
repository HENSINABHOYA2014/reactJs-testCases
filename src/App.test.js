import { render, screen } from '@testing-library/react';
import Crud from './Crud';
import App from './App';

test('renders learn react link', () => {
  render(<Crud />);
  const linkElement = screen.getByText(/Logged in as /i);
  const title = screen.getAllByTitle("AI generated image")
  expect(linkElement).toBeInTheDocument();
  expect(title.length).toBeGreaterThan(0);
});

test('renders learn react link 1', () => {
  render(<Crud />);
  const checkInput = screen.getByText(/example@gmail.com/i);
  expect(checkInput).toBeInTheDocument();
});


test('testing input feild', () => {
  render(<Crud />);
   const checkInput = screen.getByRole("textbox");
   const checkInputPlaceholder=screen.getByPlaceholderText("Enter text here")
  expect(checkInput).toBeInTheDocument();
  expect (checkInputPlaceholder).toBeInTheDocument();
  expect (checkInput).toHaveAttribute("name","username");
  expect(checkInput).toHaveAttribute("id","userId")
  expect(checkInput).toHaveAttribute("type","text")
  expect (checkInput).toHaveAttribute("value","Hensi")
});
