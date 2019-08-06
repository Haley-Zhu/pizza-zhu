import React from 'react';
import sinon from 'sinon';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Topping from './Topping';
import { restElement } from '@babel/types';


describe('Topping', () => {
  afterEach(cleanup);

  const toppingId = '123';
  const toppingName = 'rick';
  const toppingImg = './src/image.svg';
  const toppingPrice = 14.9;

  test('render topping', () => {
    const queries = render(<Topping
      key={''}
      toppingId={''}
      toppingName={toppingName}
      toppingImg={toppingImg}
      toppingPrice={toppingPrice}
      selectedTopping={[]}
      onMinusToppingAmount={() => {}}
      onPlusToppingAmount={() => {}}
    />);
    const { getByTestId } = queries;

    expect(getByTestId('topping-name').textContent).toBe(toppingName);
    expect(getByTestId('topping-img').alt).toBe(toppingName);
  });

  test('topping amount minus', () => {
    let called = false;
    let argu = "";

    const myOnMinusAmount = (arg) => {
      argu = arg;
      called = true;
    };

    const { getByTestId } = render(
      <Topping
        key={''}
        toppingId={''}
        toppingName={toppingName}
        toppingImg={toppingImg}
        toppingPrice={toppingPrice}
        selectedTopping={[]}
        onMinusToppingAmount={myOnMinusAmount}
        onPlusToppingAmount={() => {}}
      />
    );

    fireEvent.click(getByTestId('topping-amountMinus'));
    expect(called).toBe(true);
    expect(argu).toBe(toppingName);
  })

  test('amount plus', () => {
    const myOnPlusAmountSpy = sinon.spy();

    const { getByTestId } = render(
      <Topping
        key={''}
        toppingId={toppingId}
        toppingName={toppingName}
        toppingImg={toppingImg}
        toppingPrice={toppingPrice}
        selectedTopping={[]}
        onMinusToppingAmount={() => {}}
        onPlusToppingAmount={myOnPlusAmountSpy}
      />
    );

    fireEvent.click(getByTestId('topping-amountPlus'));
    sinon.assert.calledOnce(myOnPlusAmountSpy);
    sinon.assert.calledWith(myOnPlusAmountSpy, { toppingName, toppingPrice, toppingId });
  })

  test('active', () => {
    const toppingAmount = 2;

    const { getByTestId } = render(
      <Topping
        key={''}
        toppingId={toppingId}
        toppingName={toppingName}
        toppingImg={toppingImg}
        toppingPrice={toppingPrice}
        selectedTopping={[{ toppingName, toppingPrice, toppingId, toppingAmount }]}
        onMinusToppingAmount={() => {}}
        onPlusToppingAmount={() => {}}
      />
    );

    console.log('111111111111', [{ toppingName, toppingPrice, toppingId, toppingAmount }]);
    expect(getByTestId('topping').className).toBe('topping topping--active');
    expect(getByTestId('topping-amount').textContent).toBe(toppingAmount);
  })
})