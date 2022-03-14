// <!-- <script>
const message = "Hello To Full Stack World \n\n"

// Log to console
console.log(message)

// Exercise 1: LessThanOrEqualToZero
console.log ("Exercise 1: LessThanOrEqualToZero\n\n");
function zeroChecker (number){
if (number <= 0 ){
    return ("essthan OR Equal To Zero IS: "+true+"\n");
}
    else{
    return ("Lessthan OR Equal To Zero IS: "+false+"\n\n");
}
}

console.log(zeroChecker (10));
// End of Exercise 1

// Exercise 2: Footbal Points
console.log ("Exercise 2: Footbal Points\n\n");

function pointsCalculator (wins, draws, losses){
    return ((wins*3) + draws);
}

console.log (pointsCalculator(3,4,2));
// End of Exercise 2



// Exersice 3: findOddOrEven
console.log ("Exersice 3: findOddOrEven\n\n");

function findOddOrEven (){
    for (i = 0 ; i<= 10; i++){
        // console.log (i);
        if ((i % 2) == 0){
            console.log(i+" is even");
        }
        else{
            console.log(i+" is odd");
        }
    } 
    console.log("\n");  
}

findOddOrEven ();
// End of Exercise 3

// Exercise 4: helloWorlds
console.log ("Exercise 4: helloWorlds\n\n");


function helloWorlds (number){
    if (typeof number === 'number'){
        for (i= 0 ; i<number ; i++){
            console.log ("Hello World");
        }
    }
        else{
            console.log ("Goodbye");
        }
    
}
helloWorlds(6);

// End of Exercise 4

// Exercise 5: buildArray
console.log ("Exercise 5: buildArray\n\n");


function buildArray (num){
    const myArray = [];
    for (i = 0 ; i< num ; i++){
       myArray.push(i); 
    // console.log(i);
    }
return (myArray);
}

console.log (buildArray (25));

// End of Exercise 5

// Exercise 6: emptyArray
console.log ("\nExercise 6: emptyArray\n\n");


function emptyArray (gettheArray){
   
    var arraylength = gettheArray.length;
   
    for (i = 0 ; i < arraylength ; i++){
        gettheArray.pop();
    }
    return gettheArray;
    // return "Goh"
}

const myArray = (["egg","bacon","toast","coffee","random","juice"])
emptyArray (myArray);

console.log (myArray);

// End of Exercise 6

// Exercise 7: findFacts
console.log ("\nExercise 7: findFacts\n\n");


function findFacts(arr){
    console.log (arr.name,"Has a poplulation of",arr.population.toLocaleString(), "and is located in",arr.continent);
}

var arr =  ({name: "Toronto" , population:6197000 , continent: "Nortth America"});
// console.log (arr);
// console.log (arr[0].po);  
findFacts (arr);

// End of Exercise 7