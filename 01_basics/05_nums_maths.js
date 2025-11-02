const score = 400


const balance = new Number(100)
//console.log(balance);
//console.log(balance.toString().length);
//console.log(balance.toFixed(2))     //to this decimal value

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(3));  // round off

const hundreds = 1000000
//console.log(hundreds.toLocaleString());  //1,000,000


//----------------MATHS-----------------


console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.64));

console.log(Math.ceil(4.64)); //5
console.log(Math.floor(4.64)); //4


//RANDOM



console.log(Math.random()); // random values between 0 and 1 
console.log((Math.random() * 10) + 1);
console.log((Math.floor(Math.random() * 10) + 1));

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));

//max-min ==> find the range
//+1 => to avoid cases like 0.032 etc 
// +min => to specify the minimum value






