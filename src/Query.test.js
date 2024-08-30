import { render, screen } from '@testing-library/react';
import Query from "./Query";
import App from './App';


test("Multiple elements and Custom Role & getbyrole query", () => {
    render(<App />)
    const btn1 = screen.getByRole("button", { name: "Click 1" });
    const btn2 = screen.getByRole("button", { name: "Click 2" });

    const input1 = screen.getByRole("textbox", { name: /User name/i })
    const input2 = screen.getByRole("textbox", { name: /User Age/i })

    const dv1 = screen.getByRole("dummy");
    expect(dv1).toBeInTheDocument();

    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
})


test("getByallrole query", () => {
    render(<Query />)
    const btns = screen.getAllByRole("button");
    expect(btns.length).toBeGreaterThan(0);

    const options = screen.getAllByRole("option");
    expect(options.length).toBeGreaterThan(0);

})

test("getbyLabelTest query", () => {
    render(<Query />)
    // const input = screen.getByLabelText("UserName");
    // or
    const input = screen.getByLabelText(/username/i);
    expect(input).toBeInTheDocument();

})

test("getbyLabelTest query with text case check checkbox", () => {
    render(<Query />)
    const checkbox = screen.getByLabelText("Skills");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
})

test("getAllByLabelText query", () => {
    render(<Query />)
    const username = screen.getAllByLabelText("UserAge");
    // multiple input label feild
    for (let i = 0; i < username.length; i++) {
        expect(username[0]).toBeInTheDocument();
        expect(username[0]).toHaveValue("hensi");
    }
})

test("getPlaceholderTest query", () => {
    render(<Query />)
    const placeholdertetxt = screen.getByPlaceholderText("Enter Your Name");
    for (let i = 0; i < placeholdertetxt.length; i++) {
        expect(placeholdertetxt[0]).toBeInTheDocument();

    }
})

test("single button testing with getByText query", () => {
    render(<Query />)
    const btn2 = screen.getByText("Login");
    expect(btn2).toBeInTheDocument();
})

test("P tag testing with getByText query", () => {
    render(<Query />)
    const ptag = screen.getByText("P Tag Testing");
    expect(ptag).toBeInTheDocument();
    expect(ptag).toHaveClass("ptag");
    expect(ptag).toHaveAttribute("id");


})

test("h1 tag testing with getByText query", () => {
    render(<Query />)
    const h1tag = screen.getByText("h1 Tag Testing");
    expect(h1tag).toBeInTheDocument();
})

test(" testing with test id", () => {
    render(<Query />)
    const testid = screen.getAllByTestId("div-test-id");
    for (let i = 0; i < testid.length; i++) {
        expect(testid[0]).toBeInTheDocument();
    }
})

test(" testing h2 with test id", () => {
    render(<Query />)
    const testid = screen.getAllByTestId("div-test-id");
    for (let i = 0; i < testid.length; i++) {
        expect(testid[0]).toBeInTheDocument();
    }
})







