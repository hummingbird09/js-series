const form = document.querySelector('form')
//this usecase will give you empty
//  const height = document.querySelector('#height')
//      const weight = document.querySelector('#weight')
//      const results = document.querySelector('#result')

form.addEventListener('submit', (e)=>{
     e.preventDefault();
     const height = parseInt(document.querySelector('#height').value)
     const weight = parseInt(document.querySelector('#weight').value)
     const results = document.querySelector('#results')

     if (height === '' || height<0|| isNaN(height)) {
          results.innerHTML = `Please provide a valid input ${height}`
     }
     if (weight === '' || weight<0|| isNaN(weight)) {
          results.innerHTML = `Please provide a valid input ${weight}`
     }
     const bmi = (weight*10000/(height*height)).toFixed(2)

      if (bmi<18.6) {
               results.innerHTML = `your bmi is ${bmi} and you fall under underweight category so eat something ma`
          }
          if (bmi>18.7 && bmi<24.9) {
               results.innerHTML = `your bmi is ${bmi} and you fall normal weight category so yayy`
          } else {
               results.innerHTML = `your bmi is ${bmi} and you fall under overweight category so stop eating fatty `
          }


})