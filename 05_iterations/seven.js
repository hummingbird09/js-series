const myNumbers = [1,2,3,4,5,6,7,89,10]

const printNums = myNumbers.map((num)=> num+10)
console.log(printNums);

const newNums = myNumbers.map((num)=> num*10)
                        .map( (num)=> num+1)
                        .filter((num) => num>=40)
