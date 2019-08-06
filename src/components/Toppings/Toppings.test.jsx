import React from 'react';
import Toppings from './Toppings';
import {render, cleanup} from '@testing-library/react';

afterEach(() =>{
  cleanup();
});

test('render all toppings', () => {
  const queries = render(<Toppings key={''} selectedToppings={[]} />);
  const { getAllByTestId } = queries;

  expect(getAllByTestId('topping').length).toBe(12);
});

test('render all toppings', () => {
  const queries = render(<Toppings key={''} selectedToppings={[]} />);
  const { getAllByTestId } = queries;

  expect(getAllByTestId('topping').length).toBe(12);
});