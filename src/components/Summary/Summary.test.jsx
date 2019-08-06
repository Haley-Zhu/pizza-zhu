import React from 'react';
import { render, cleanup } from '@testing-library/react';
import accMul from '../../helper/Math/accMul';
import accAdd from '../../helper/Math/accAdd';
import Summary from './Summary';

describe('Summary', () => {
  afterEach(cleanup);

  test('Total', () => {
    const pizzaPrice = 9.9;
    const topping1Price = 2.99;
    const topping2Price = 1.99;
    const topping1Amount = 2;
    const topping2Amount = 3;

    const { getByTestId } = render((
      < Summary
        selectedSize={{ sizeStyle:'testSize', price:pizzaPrice }}
        selectedToppings={[{
          toppingName: 'topping1',
          toppingPrice: topping1Price,
          toppingAmount: topping1Amount
        }, {
          toppingName: 'topping2',
            toppingPrice: topping2Price,
            toppingAmount: topping2Amount
          }]}
        onMinusToppingAmount={() => { }}
        onPlusToppingAmount={() => { }}
      />
    ))

    const toppingPrice = accAdd(accMul(topping1Price,2), accMul(topping2Price,3));
    const expectTotal = accAdd(pizzaPrice, toppingPrice);
    expect(getByTestId('summary-total').textContent).toBe(`$${expectTotal}`);
  });
});