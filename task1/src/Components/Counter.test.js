import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import { Provider } from 'react-redux';
import store from "../Redux/store";



test("increment counter",()=>{
    render( <Provider store={store}> <Counter/> </Provider>);

    const count=screen.getByTestId("result")
    const incrementBtn=screen.getByTestId("up")
    // const decrementBtn=screen.getByTestId("down")clear
    fireEvent.click(incrementBtn)
    expect(count).toHaveTextContent(1)


})