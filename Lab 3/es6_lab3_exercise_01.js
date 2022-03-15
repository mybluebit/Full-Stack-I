// Lab 3
// Exercise 1: Difference between numbers by ES6

let diffNums = (number) => {
    if (number > 13){
        return ((number -13) *2);
    }
    else {
        return (13 - number);
    }
}


console.log (diffNums(32));
// Output 38
console.log (diffNums(11));
// Outout 2