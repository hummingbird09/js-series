const user = {
    username: "Ashika",
    price : 999,
    welcomeFunction : function(){
        console.log(`welcome  ${this.username} to our website `);
        
    }

}

user.welcomeFunction()
user.username = "sam"
user.welcomeFunction()

/*function chai(){
    let username = "hitesh"
    console.log(this.username);
    
}
chai(); // undefined
*/


/*const chai = function (){
    let username = "hitesh"
    console.log(this.username);
}
chai() // undefind 

*/

// arrow function

const chai =() =>{
    let username = "hitesh"
    console.log(this.username);
}
chai() //undefined 

//UNDERSTANDING SYNTAX

//------explicit return -----//
/*const addTwo = (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,4));
*/


//-------- implicit return ------
//const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)

//const displayUsername = (num1,num2) => ({username: "ashika"})

