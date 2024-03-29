`use strict`;

function calculateTotal(number) {
  let index = 0;
  while (index <= number) {
    number += 1;
  }
  return number;
}

console.log(calculateTotal(3));
