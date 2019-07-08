import React from 'react';

const Summary = () => (
  <section className="summary">
    <Title>Summary</Title>
    <ul>
    </ul>
    <hr/>
    <div className="summary__total">
      <span>Total</span>
      <span className="item__price">$9.9</span>
    </div>
  </section>
)

export default Summary;

{/* <section class="summary">
      <h2>Summary</h2>
      <ul>
        <li class="summary__itemsize">
          <span class="item__name">Pizza(Small)</span>
          <span class="item__price">$9.9</span>
        </li>
        <li class="summary__item">
          <span class="item__name">Anchovy</span>
          <div class="item__amount">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
          <span class="item__price">$0.9</span>
        </li>
      </ul>
    </section> */}