class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
const itemsStep1 = storage.getItems();
console.log(itemsStep1);

storage.addItem("Droid");
const itemsStep2 = storage.getItems();
console.log(itemsStep2);

storage.removeItem("Prolonger");
const itemsStep3 = storage.getItems();
console.log(itemsStep3);

document.getElementById("task-2-output").innerHTML = `
  <p>${JSON.stringify(itemsStep1)}</p>
  <p>${JSON.stringify(itemsStep2)}</p>
  <p>${JSON.stringify(itemsStep3)}</p>
`;