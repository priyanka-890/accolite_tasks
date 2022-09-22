import { render, screen,within } from '@testing-library/react';
import ToDoList from './ToDoList';

test("check list", () => {
    const todo=["pens","milk","choclate"]
    render(<ToDoList todo={todo} />);
    const todo2 = screen.getByRole("list", {
        name: /to-do-list/i,
      })
      const { getAllByRole } = within(todo2)
      
      const items = getAllByRole("listitem")
  expect(items.length).toBe(3)
     
      
})
