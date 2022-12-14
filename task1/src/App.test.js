import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from "./Redux/store"

test('renders learn react link', () => {
  render(<Provider store={store}> <App /></Provider>);
  const linkElement = screen.getByText(/counter/i);
  expect(linkElement).toBeInTheDocument();
});
