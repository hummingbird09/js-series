//for each

const coding = ["js","ruby","java","python","cpp"]

            // callback function
coding.forEach( function (item){
            console.log(item);
            
}  )

coding.forEach((val)=> {
    console.log(val);
    
})

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

// for each with objects

const myCoding =[
    {
    languageName:"javascript",
    languageFileName: "js"
},
 {
    languageName:"Python",
    languageFileName: "py"
},
 {
    languageName:"solidity",
    languageFileName: "aol"
},

]

myCoding.forEach( (items) => {
    console.log(items.languageName);
    
})