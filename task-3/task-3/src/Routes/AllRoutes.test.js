import { render, screen } from '@testing-library/react';
import AllRoutes from './AllRoutes';

test('renders learn react link', () => {
  render(<AllRoutes/>);
//   expect(screen.getByText(/Navigation/i)).toBeInTheDocument()
test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'
  
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>,
    )
  
    // verify navigation to "no match" route
    expect(screen.getByText(/no match/i)).toBeInTheDocument()
  })
});
