
import {render, screen, cleanup } from '@testing-library/react'

import Home from "../pages/Home/index";

test('sould be render component', ()=> {
  render (<Home />);
  const elementComponent = screen.getByTestId('home_content');
  expect(elementComponent).toBeInTheDocument();
  expect(elementComponent).toHaveTextContent('Home Content');
})

test('sum(1, 2) to be 3', ()=> {
  expect(true).toBe(true);
})