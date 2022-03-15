// Lab 3
// Exercise 3: Using array.proto.map

const array = ['red', 'green', 'blue'];

const theMap = array.map (x => x.charAt(0).toUpperCase()+x.slice(1));

console.log(theMap);
// Expected output: [ 'Red', 'Green', 'Blue' ]
