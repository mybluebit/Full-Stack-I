// Lab 3
// Exercise 3: Using array.proto.filter
function isBigEnough(value) {
    return value >= 20
  }
  
  let filtered = [1, 60, 34, 30, 20, 5].filter(isBigEnough)
  console.log (filtered)
  // Expected out [ 60, 34, 30, 20 ]