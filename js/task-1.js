const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
};

customer.setDiscount(0.15);
const discount = customer.getDiscount();
console.log(discount); // 0.15

customer.addOrder(5000, "Steak");
const balance = customer.getBalance();
console.log(balance); // 19750

const orders = customer.getOrders();
console.log(orders);

document.getElementById("task-1-output").innerHTML = `
  <p>${discount}</p>
  <p>${balance}</p>
  <p>${JSON.stringify(orders)}</p>
`;