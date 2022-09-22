import { render, screen,fireEvent } from '@testing-library/react';
import ToDo from './ToDo';

test("check input field", () => {
    render(<ToDo />);
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
})


test("check input value", () => {
   render(<ToDo />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, {target: {value: 'Wake up'}});
    expect(input.value).toBe('Wake up');
})

test("check button",()=>{
    render(<ToDo/>);
    const btn=screen.getByTestId("addButton")
    expect(btn).toBeInTheDocument();

})