function myFunction(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return a + b; 
  }
}

console.log(myFunction(0,0)); //expected 0, returns NaN