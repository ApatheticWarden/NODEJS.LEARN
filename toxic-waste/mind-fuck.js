const num1 = Math.floor(Math.random() * 11);
const num2 = Math.floor(Math.random() * 11);

function addVal() {
  console.log(`The sum is: ${num1 + num2}`);
}

module.exports = { num1, num2, addVal };
