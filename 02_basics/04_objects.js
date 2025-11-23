//const tinderUser = new Object();

const tinderUser = {}

tinderUser.id ="123abc";
tinderUser.name = "John"
tinderUser.isLoggedIn = false;

//nestedObjects

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userFullName :{
            firstname : "john",
            lastname : "doe"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstname);

//combining objects

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

const obj3 = {obj1,obj2}
console.log(obj3); // {{1: "a", 2:"b"}, {3: "c", 4:"d"}}
const obj4 = Object.assign({},  obj1,obj2) //  {1: "a", 2:"b", 3: "c", 4:"d"}
                        //target  //source

// using spread operator

const obj5 = {...obj1,...obj2}


// data from db
const users =[
{
    id:1,
    email :"j@gmail.com"
},
{
    id:1,
    email :"j@gmail.com"
},
{
    id:1,
    email :"j@gmail.com"
},
{
    id:1,
    email :"j@gmail.com"
},
{
    id:1,
    email :"j@gmail.com"
},
]

users[1].email;

console.log(Object.keys(tinderUser)); // will return an array of keys || ["id","name","isLoggedIn"]
console.log(Object.values(tinderUser)); //  will return an array of values || ["123abc","john","false"]
console.log(Object.entries(tinderUser)); // will return an array of keys and their values || [["id","123abc"] , ["name","john"] ,  ["isLoggedIn",false]]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 


//DESTRUCTURING 
const course = {
        coursename:"js",
        price : "999",
        courseInstructor : "hitesh"
}

const {courseInstructor:instructor} = course
console.log(instructor);
