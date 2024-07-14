//shopping cart
function calculateCart(...num1){ //rest
    return num1
}

console.log(calculateCart(200,300,400))

//obj in fun 
const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleObject(user)


//handleObject(anyobject)
handleObject({
    username : "sam",
    price : 399
})


//array in fun
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue[200,400,100,600]);