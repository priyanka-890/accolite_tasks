import { render, screen ,fireEvent,setup} from '@testing-library/react';
import App from './App';

test('check heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Debouncing/i);
  expect(linkElement).toBeInTheDocument();
});

test('check input field value', async () => {
  render(<App/>);

  const inputField =  screen.getByTestId(`input`);
  expect(inputField).toBeInTheDocument();
  fireEvent.change(inputField, {target: {value: 'test'}})
  expect(inputField.value).toBe('test')

})

test('check input field value after change', async () => {
  render(<App/>);

  const inputField =  screen.getByTestId(`input`);
  
  fireEvent.change(inputField, {target: {value: 'test 2'}})
  expect(inputField.value).toBe('test 2')

})

test('check input field value after change3', async () => {
  render(<App/>);

  const inputField =  screen.getByTestId(`input`);
  fireEvent.change(inputField, {target: {value: 'test 3'}})
  expect(inputField.value).toBe('test 3')
  fireEvent.change(inputField, {target: {value: 'test 4'}})
  expect(inputField.value).toBe('test 4')

})


