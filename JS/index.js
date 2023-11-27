let numbersInput = document.querySelector('[data-inputNumbers]');
let sumUpBtn = document.querySelector('#sumUpBtn')
sumUpBtn.addEventListener('click', ()=> sumUp(numbersInput.value))
let result = document.querySelector('#result')

function sumUp(a){
    arr = a.split(',')
    total = arr.reduce((total, element)=>{
        return total+ +element
    },0)
    return result.textContent = `The sum of the numbers in the array is ${total}`
}