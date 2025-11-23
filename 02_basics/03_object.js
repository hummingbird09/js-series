//Singleton objects : only made when objects are made through constructors

// Objects can be made in 2 ways : 1- constructor method 2: literal method


// 1- constructor method
//Object.create


//2)- object literals

const mySym = Symbol("key1");

const JsUser ={
//  key     Value
    name : "Ashika",
    [mySym]: "My key1", // syntax to write symbols || if not used without [] then type = String
    "full name" : "Tiwari",
    location:"jaipur",
    email : "ashika@gmail.com" ,
    isLoggedIn : false,
    lastLoginDays : ["Monday","Wednesday"]
}

//Accessing object Values
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

//changing object values
JsUser.email = "ashika@meowmeow.com";
Object.freeze(JsUser); // values can't be edited 
JsUser.email = "cat@meowmeow.com" // wont be displayed 

//functions
JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}





