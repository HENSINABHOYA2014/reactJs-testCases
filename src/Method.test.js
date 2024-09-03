import { configure, render, screen } from '@testing-library/react';
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
