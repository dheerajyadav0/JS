const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);
console.log(Math.PI);
Math.PI =5;
console.log(Math.PI);

const chai = {
    name :'ginger chai',
    price : '250'
}
console.log(Object.getOwnPropertyDescriptor(chai));