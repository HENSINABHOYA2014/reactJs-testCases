import { configure, render, screen } from '@testing-library/react';
import Query from "./Query";
import App from './App';
import userEvent from '@testing-library/user-event';
configure({ testIdAttribute: 'data-testid' })


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

test("Overriding data-testid", () => {
    render(<Query />)
    const testidelement = screen.getAllByTestId("test-div");
    for (let i = 0; i < testidelement.length; i++) {
        expect(testidelement[0]).toBeInTheDocument();
    }
})

test("getByDisplayValue and getAllByDisplayValue", () => {
    render(<Query />)
    const displayValue = screen.getByDisplayValue("Henuuu");
    expect(displayValue).toBeInTheDocument();
})

test("textarea with getByDisplayValue and getAllByDisplayValue", () => {
    render(<Query />)
    const textarea = screen.getByDisplayValue("My Mom is my life");
    expect(textarea).toBeInTheDocument();
})

test("radio with getByDisplayValue and getAllByDisplayValue", () => {
    render(<Query />)
    const radio = screen.getByDisplayValue("mail");
    expect(radio).toBeInTheDocument();
})

test("title with getByTitle and getAllByTitle", () => {
    render(<Query />)
    const title = screen.getAllByText("Click Please Me");
    for (let i = 0; i < title.length; i++) {
        expect(title[i]).toBeInTheDocument();
    }
})


// test("test image element with getByAltText and getAllByAltText", () => {
//     render(<Query />)
//     const alttext = screen.getByAltText("flower image");
//     expect(alttext).toBeInTheDocument();
// })

test("test image element with getByAltText and getAllByAltText", () => {
    render(<Query />)
    const alttext = screen.getAllByAltText("flower image");
    for (let i = 0; i < alttext.length; i++) {
        expect(alttext[i]).toBeInTheDocument();
    }
})

test("TextMatch with String", () => {
    render(<Query />)
    // const div = screen.getByText("Hellooooo",{exact:false});
    // const div = screen.getByText("hellooooo World",{exact:false});
    const div = screen.getByText("hellooooo world", { exact: false });
    expect(div).toBeInTheDocument()
})

test("TextMatch with Regex", () => {
    render(<Query />)
    const div1 = screen.getByText(/har Mahadev/i);
    expect(div1).toBeInTheDocument()
})

test("QueryBy and QueryAllBy | Test hidden elements", () => {
    render(<Query />)
    const loginbtbn = screen.queryByText("login");
    expect(loginbtbn).not.toBeInTheDocument()
})

test("Test Elements with JavaScript Query | Custom Query", () => {
    render(<Query />)
    const querySelector = document.querySelector("#testing-id");
    expect(querySelector).toBeInTheDocument()
    expect(querySelector).toHaveTextContent("Test Elements with JavaScript Query | Custom Query")
    expect(querySelector).toHaveAttribute("class")
})











