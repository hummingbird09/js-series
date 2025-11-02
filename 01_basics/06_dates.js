let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreatedDate = new Date(2025, 0, 2)
console.log(myCreatedDate.toDateString()); // jan 2 2025

//let myCreatedDate1 = new Date("2025-11-02")
let myCreatedDate1 = new Date("02-11-2025")

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDay);



