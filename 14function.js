console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");

function sayMyName(){
console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}

sayMyName()

function addTwoNumbers(number1 , number2){ //parameters
    console.log(number1 + number2);

}

addTwoNumbers(3,4)  //arguements

function addTwoNumbers(number1 , number2){ //parameters
    let result = number1 + number2
    console.log("hitesh");
    return result

}

const result= addTwoNumbers(3,5)

console.log("Result :", result);

if(username === undefined){
    console.log("please enter username");//** */
    return
}
function logInUserName(username){
    return `${username} just logged in`
}

console.log(logInUserName("dheeraj"))
console.log(logInUserName()) //** */