import { fireEvent, render, screen } from '@testing-library/react';
import Crud from './Crud';
import App from './App';
import renderer from 'react-test-renderer'
import Users from './Users';
import handleOtherData from './helper';

// test('renders learn react link', () => {
//   render(<Crud />);
//   const linkElement = screen.getByText(/Logged in as /i);
//   const title = screen.getAllByTitle("AI generated image")
//   expect(linkElement).toBeInTheDocument();
//   expect(title.length).toBeGreaterThan(0);
// });

// test('renders learn react link 1', () => {
//   render(<Crud />);
//   const checkInput = screen.getByText(/example@gmail.com/i);
//   expect(checkInput).toBeInTheDocument();
// });


// test('testing input feild', () => {
//   render(<Crud />);
//   const checkInput = screen.getByRole("textbox");
//   const checkInputPlaceholder = screen.getByPlaceholderText("Enter text here")
//   expect(checkInput).toBeInTheDocument();
//   expect(checkInputPlaceholder).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute("name", "username");
//   expect(checkInput).toHaveAttribute("id", "userId")
//   expect(checkInput).toHaveAttribute("type", "text")
//   expect(checkInput).toHaveAttribute("value", "")


// });

// describe("Ui testing", () => {
//   test('testing input feild', () => {
//     render(<Crud />);
//     const checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   })
//   describe("nested Ui testing", () => {
//     test('nested testing input feild', () => {
//       render(<Crud />);
//       const checkInput = screen.getByRole("textbox");
//       expect(checkInput).toHaveAttribute("name", "username");
//     })

//   })
// })

// describe.skip("App testing", () => {
//   test('testing input feild', () => {
//     render(<Crud />);
//     const checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   })
// })

// test('testing onfchange event', () => {
//   render(<Crud />);
//   const input = screen.getByRole("textbox");
//   fireEvent.change(input, { target: { value: 'a' } })
//   expect(input.value).toBe("a");
// });

// test("Class Component method testing", () => {
//   render(<App />)
//   const componentData = renderer.create(<Users />).getInstance()
//   let a = "text"
//   let b = "add"
//   expect(componentData.getUserList(a + b)).toMatch(a + b)
// })

// test("testing with onclick event",()=>{
//   render(<Crud/>)
//   const btn = screen.getByRole("button", { name: /updated data/i });
//   fireEvent.click(btn);
//   expect(screen.getByText("updated data")).toBeInTheDocument();
// })

// test("Multiple elements and Custom Role & getbyrole query", () => {
//   render(<App />)
//   const btn1 = screen.getByRole("button", { name: "Click 1" });
//   const btn2 = screen.getByRole("button", { name: "Click 2" });
//   const input1 = screen.getByRole("textbox", { name: "User name" })
//   const input2 = screen.getByRole("textbox", { name: "User Age" })
//   const dv1=screen.getByRole("dummy");
//   expect(dv1).toBeInTheDocument();

//   expect(btn1).toBeInTheDocument();
//   expect(btn2).toBeInTheDocument();
//   expect(input1).toBeInTheDocument();
//   expect(input2).toBeInTheDocument();
// })

// test("getByallrole query", () => {
//   render(<App />)
//   const btns = screen.getAllByRole("button");
//   const options = screen.getAllByRole("option");

//   expect(btns).toBeInTheDocument();

//   for (let i = 0; i < btns.length; i++) {
//     expect(btns[i]).toBeInTheDocument()
//   }

//   for (let i = 0; i < options.length; i++) {
//     expect(options[i]).toBeInTheDocument()
//   }
// })
