// for of

// [{},{},{}]  => objects inside arrays

const arr =[1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
    
}

const greetings = "hello world";
for (const str of greetings) {
    //console.log(`each char is ${str}`);
    
}

// maps

const map = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")

for (const key of map) {
    //console.log(`value of map is ${key}`);
    
}

for (const [key,value] of map) {
    console.log(`value of map is ${key} -> ${value}`);
    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,':-',value);
    
}

