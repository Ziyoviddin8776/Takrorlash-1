let soqqa=Math.trunc(Math.random()*6)+1
console.log(soqqa)


let age=20;
let year=2010;

age>year ? console.log(`${age} katta`) : console.log(`${year} katta`)

let a=10;
let b=20;

function hisob(){
    let javob=a+b;
    return javob
}

console.log(hisob())

let myFunc=function (){
    let c=100;
    let d=200;
    return c+d
}

console.log(myFunc())

let func=()=>{
    let e=1000;
    let f=2000;
    return e+f
}

console.log(func())


const oylik=function (s){
    return s
}
const abet=function (x){
    return x
}

const foyda=function (oylik,abet){
    return oylik-abet
}
console.log(foyda(oylik(1000),abet(200)))

let numbers=[1,2,3,4,5]


console.log(numbers.length)

numbers.push(100);
numbers.unshift(200)
numbers.pop()
numbers.shift()
numbers.splice(1,2)
console.log(numbers)
console.log(numbers.indexOf(4))
console.log(numbers.includes(4))
