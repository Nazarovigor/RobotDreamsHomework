let randomArray = [4, 4, 8, 3, 3, 3, 2, 4, 4];

console.log("Display all elements");
for (let i=0; i<randomArray.length; i++) 
    console.log(`the ${i} element is ${randomArray[i]}`);



console.log("\nDisplay first 3 elements");
for (let i=0; i<3; i++) 
    console.log(`the ${i} element is ${randomArray[i]}`);

console.log("\nDisplay Sum of elements");
let sum = 0;
for (let i=0; i<randomArray.length; i++) 
    sum = sum + randomArray[i];

console.log(`The sum of elements is ${sum}`);


console.log("\nDisplay Sum of elements != 4");
let sum1 = 0;
for (let i=0; i<randomArray.length; i++) {
    if (randomArray[i] != 4)
        sum1 = sum1 + randomArray[i];
} 

console.log(`The sum of elements that ! = 4 is ${sum1}`);