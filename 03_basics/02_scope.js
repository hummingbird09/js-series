let a = 300;
// {} with function/conditions => scope

// inside the {} => block scope else global scope
if (true) {
let a = 10;
const b = 20;
var c = 30;
console.log("INNER: ", a);
}
console.log(a); //output : INNER: 10 300
console.log(b); // output : b not defind
console.log(c); // output : 30


// -- nested-scope--
// --> child function can access the variables of parents but not vice versa
function one(){
    const username = "ashika"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }

    console.log(website);  // error
    two();
    
}
one()

if(true){
    const username = "hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        console.log(username+website);
        
    }
    console.log(website);  // error
    
}

console.log(username); //error


// --------------interesting-------
function addone(num){
return num+1
}

addone(5)

//an expression
const addTwo = function(num){
    return num+2
}

addTwo(5)
