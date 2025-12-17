// if

const UserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("welcome");
    
}

// === checks type too
if(2=="2"){
    console.log("yes it's true");
    
}

if(2===2){
    console.log("type checked!");
    
}

// else
    const temperature = 41
if(temperature==41){
    console.log("temperature is less than 50");
    
}
else{
    console.log("temperature is greater than 50");
    
}


// scope
const score = 200
if(score>100){
    const power = "fly"
    console.log(`user power : ${power}`);
}
 console.log(`user power : ${power}`);
//--------------

/*const balance = 1000
if(balance>500) console.log("test"),console.log("test2");

if(balance<500){
    console.log("less than 500 ");
    
}
else if (balance<750){
        console.log("less than 750");
        
}
else if (balance<900){
        console.log("less than 750");
        
}
else{
    console.log("less than 1200");
    
}*/

const isUserLoggedIn  =  true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail =  true;

if(UserLoggedIn && debitCard){
    console.log("Allow to  buy courses");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow access");
    
}
