class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

const builder = new StringBuilder(".");
const step1 = builder.getValue();
console.log(step1); // "."

builder.padStart("^");
const step2 = builder.getValue();
console.log(step2); // "^."

builder.padEnd("^");
const step3 = builder.getValue();
console.log(step3); // "^.^"

builder.padBoth("=");
const step4 = builder.getValue();
console.log(step4); // "=^.^="

document.getElementById("task-3-output").innerHTML = `
  <p>${step1}</p>
  <p>${step2}</p>
  <p>${step3}</p>
  <p>${step4}</p>
`;