// Lab 3
// Exercise 02: Rewrite the code block by using Es6 syntax

// function gretter (myArray, counter) {
//     var greetText ='Hello';    
//     for (var index = 0; index < myArray.length; index++){
//       console.log(greetText + myArray[index]);
//     }
//   }  
//   gretter(['Randy Savage', 'Ric Falir', 'Hulk Hogan'],3);

const gretter = (myArray, countere) => {
    let greetText= 'Hello';

    for (const index in myArray){
        console.log(myArray[index]);
    }
}

gretter(['Randy Savage', 'Ric Falir', 'Hulk Hogan'],3);
