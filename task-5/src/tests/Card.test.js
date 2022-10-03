import { render, screen ,within} from '@testing-library/react';
import Card from '../components/Debounce/Card';


test("check list", () => {
const suggestions=[{ _id: 1, name: "Oslo" }, { _id: 2, name: "Denver" }]
     render(<Card suggestions={suggestions} />);
     const list = screen.getByRole("list", {
        name: /render-list/i,
      })
      const { getAllByRole } = within(list)
      const items = getAllByRole("listitem")
      expect(items.length).toBe(2)
})


test('check single item', () => {
const suggestions=[{ _id: 1, name: "Oslo" }, { _id: 2, name: "Denver" }]
    render(<Card suggestions={suggestions}/>);
    const items=screen.getAllByTestId("listitem")
    expect(items.length).toBe(2)
    
  });