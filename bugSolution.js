function myFunction(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Handle the case where both inputs are 0
  } else if (a === 0) {
    return b;
  } else if (b === 0) {
    return a;
  } else {
    return a + b; 
  }
}

console.log(myFunction(0,0)); // Now correctly returns 0