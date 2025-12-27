const userEmail = []

if(userEmail){
    console.log("Got user email");
    
}
else{
    console.log("Don't have");
    
}

/*
falsy values
false,0,-0,BigInt 0n, "",null,undefined, NaN 


----if not falsy then it's obv truthy
truthy values
"0","false"," ",[],{},function(){},
*/

if (userEmail.length===0) {
    console.log("Array is empty");
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
}


// Nullish coalescing Operator (??) : null and undefined

let val1;
val1 = 5 ?? 10

console.log(val1);  //5

val1 =  null ?? 10
console.log(val1); //10

val1 = undefined ?? 15
console.log(val1);  //15

val1 = null ?? 10?? 20
console.log(val1); //10

// Terinary operator

// condition ? true : false


const iceTeaPrice = 100;
iceTeaPrice<=80 ? console.log("less than 80"): console.log("more than 80");





