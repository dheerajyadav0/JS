//kis treh ko data ko memory mai rakha jata hai aur access kiya jata hai
//on the basis of it we divide datatype in 2 parts -> primitive and non-primitive

//  1.Primitive(call by value : hme copy krke diye jate h)
//string, number , nulll , undefined ,boolean, symbol, bigint

//  2.non-primitive(call by refernce)
//array, object, function

//* js is dynamically typed language

const score = 100
const scorevalue = 100.3      //number 

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

console.log(typeof id);//

//Arrays , Object ,Function
const heros = ["dheeraj", "aman", "gajal"]

let info = {
    name:"dheeraj"
    

}

const myfun = function(){
    console.log("hello world");
}
console.log(myfun);

console.log(heros);
console.log(typeof heros);
console.log(info);
console.log(typeof info);
console.log(myfun);
console.log(typeof myfun);


//+++++++++++//
//stack(primitive)      |  heap(non-primitive)
//copy                     refernce
//
 //+++++++copy
let myyoutubename = "dheerajcode"
let anothername = myyoutubename
anothername ="codewithaman"

console.log(myyoutubename);
console.log(anothername);



//+++refernce

let userOne ={
    email :"user@gmail.com"
  
}

let userTwo = userOne

userTwo.email = "dheeraj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


