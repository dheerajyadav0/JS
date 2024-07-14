const userEmail = "hitesh.ai"  //"Got user email"
//const userEmail = ""   //Dont have user email"


if(userEmail){
    console.log("Got user email");
} else {
    console.log("Dont have user email");
}


//falsy values
// false , 0 ,-0 , null , Nan , undefined , ""

//truthy values(suprising)
// "0" , "false", " " ,[] ,{} , function(){}

if (userEmail.length === 0) { //agr array hai toh length proprty m 0 call kr lenge

    console.log("Array is empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){ //obj ki keys ki length 0 call kr lenge
    console.log("Object is empty");
}

//nullish coalescing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10     // ye ya fir ye
// val1 = null ?? 10
val1 = undefined ?? 15 ?? 20  // 1st value milti hai assign ho jati h
console.log(val1);


//terniary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") :console.log("more than 80");