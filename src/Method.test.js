import { configure, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';  
import Method from './Method';

test("Assertion Methods", () => {
    render(<Method />)
    const inputfeild = screen.getByRole("textbox");
    expect(inputfeild).toBeInTheDocument()
    expect(inputfeild).toHaveValue("H N");
    expect(inputfeild).toHaveValue();
    expect(inputfeild).toBeEnabled()
    // expect(input).toBeDisabled()
    expect(inputfeild).toHaveAttribute("id")
    expect(inputfeild).toHaveAttribute("data-test")
    expect(inputfeild).toHaveClass("test-style")
})
test("TextMatch with Function", () => {
    render(<Method />)
    // const fuctionmatch = screen.getByText((content,element)=>content.startsWith("My"));
    // const fuctionmatch = screen.getByText((content,element)=>content.endsWith("Nabhoya"));
    const fuctionmatch = screen.getByText((content, element) => content.includes("hoya"));
    expect(fuctionmatch).toBeInTheDocument()
})

test("findBy and findAllBy | test async elements", async () => {
    render(<Method />)

    // Increase the timeout to match the delay in your useEffect
    const datafound = await screen.findByText("Data Found");

    expect(datafound).toBeInTheDocument();
});

test("Click Event with User Event Library", async () => {
    render(<Method />)
    const ClickEventbtn = screen.getByText("Hello World");
    await userEvent.click(ClickEventbtn);
    expect(screen.getByText("Hello")).toBeInTheDocument()
})


test("onChange Event Testing", async () => {
    render(<Method />)
    const onChangeEvent=screen.getByRole("textbox")
    await userEvent.type(onChangeEvent,"Hensi N N")
    expect(screen.getByText("Hensi N N")).toBeInTheDocument()
})
