let n = parseInt(prompt("Enter a nonnegative integer."));

while (n < 0 || !Number.isInteger(n)) {
  n = parseInt(prompt("Enter a nonnegative integer."));
}

const factorial = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

document.querySelector('#factorial').innerHTML = factorial(n);
