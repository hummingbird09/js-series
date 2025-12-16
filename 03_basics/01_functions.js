


//syntax
function  sayMyName(){
console.log("m");
console.log("e");
console.log("o");
console.log("w");
}


//sayMyName ---> reference
//sayMyName()    //----> calling the function


 /*                       //paramenters
function addTwoNumbers( num1,num2){
     console.log(num1+num2);                    
}
*/


            //Arguments
addTwoNumbers(3,"4")    //concatinatiom

const result = addTwoNumbers(3,9)
console.log("result: " , result ); // result : undefined because the function is not returning a value





function addNumbers(num1,num2){
    return num1+num2
}


const result2 = addNumbers(4,5);
//console.log("show Result :" , result2); // output = show Result : 9

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("ashika"))
console.log(loginUserMessage())   // undefined just logged in


//Shopping cart

function calculateCartPrice(...num1){  //REST OPERATOR
    return num1;
}

console.log(calculateCartPrice(200,400,500));  // returns an array : [200,400,500]


const user ={
username: "ashika",
price : 199
} 

function handleObject(anyobject){
 console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}
 console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,400,500,1000]));
 

