import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders heading custom hook', () => {
  render(<App />);
  const linkElement = screen.getByText(/custom hooks/i);
  expect(linkElement).toBeInTheDocument();

});


test('check count label', () => {
  render(<App />);
  const linkElement = screen.getByText(/count:/i);
  expect(linkElement).toBeInTheDocument();

});

test('check increment of count', () => {
  render(<App />);
  const count=screen.getByTestId('count')
  expect(count).toBeInTheDocument()
});

test('check btn label', () => {
  render(<App />);
  const btn=screen.getByTestId("btn")
  expect(btn).toBeInTheDocument();
});

test('click btn check count', () => {
  render(<App />);
  const count=screen.getByTestId('count')
  expect(count).toHaveTextContent('1')
  const clickBtn=screen.getByTestId("btn")
  fireEvent.click(clickBtn)
  expect(count).toHaveTextContent('2')
 
});


