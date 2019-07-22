class Repository {
  constructor() {
    this.baseURL = 'http://localhost:3000';
  }

  getToppingsSet() {
    return fetch(`${this.baseURL}/toppings`).then(res => res.json());
  }

  getSizesSet() {
    return fetch(`${this.baseURL}/sizes`).then(res => res.json());
  }

  CreatOrder(toppings, size, customer) {
    const { name } = customer.find(detailInput => (
      detailInput.hasOwnProperty('name')));
    const { email } = customer.find(detailInput => (
      detailInput.hasOwnProperty('email')));

    return fetch(`${this.baseURL}/orders`, {
      body: JSON.stringify({
        toppings: toppings.map(({ toppingId, toppingAmount: amount}) => ({ toppingId, amount})),
        size,
        customerId: email,
        customerName: name,
        createdTime: "20190722"
      }),
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
    })
    .then(res => res.json());
  }
}

export default new Repository;