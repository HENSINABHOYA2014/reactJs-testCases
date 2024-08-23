import { fireEvent, render, screen } from '@testing-library/react';
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
  const checkInputPlaceholder = screen.getByPlaceholderText("Enter text here")
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId")
  expect(checkInput).toHaveAttribute("type", "text")
  expect(checkInput).toHaveAttribute("value", "")

 
});

describe("Ui testing", () => {
  test('testing input feild', () => {
    render(<Crud />);
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  })
  describe("nested Ui testing", () => {
    test('nested testing input feild', () => {
      render(<Crud />);
      const checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name", "username");
    })

  })
})

describe.skip("App testing", () => {
  test('testing input feild', () => {
    render(<Crud />);
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  })
})

test('testing onfchange event', () => {
  render(<Crud />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: 'a' } })
  expect(input.value).toBe("a");
});

test("testing with onclick event",()=>{
  render(<Crud/>)
  const btn = screen.getByRole("button", { name: /updated data/i });
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
})

test("snapshot for app component",()=>{
  const container=render(<Crud/>)
})