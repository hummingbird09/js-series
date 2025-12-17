// Immediately Invoked Function Expressions (IIFE)

// named iffe
(function chai(){
    console.log(`DB CONNECTED`);
    
})();

// first () -> function defination 
// second () -> execution call 

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("meow")

