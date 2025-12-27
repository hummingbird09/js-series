// forin loop


const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    switft: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortccut is for ${myObject[key]}`);
      
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
        
}


