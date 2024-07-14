//array in js are reshapeable 

const myArr = [1,2,3,4,5]
console.log(myArr[1]);

//alternate
const myArr2 =new Array(1,2,3,4)
console.log(myArr2[0]);

// ++++Array methods

// myArr.push(6)
// //pop()
// console.log(myArr)

//unshift ; shift
myArr.unshift(9)
console.log(myArr);
//time consuming cuz for large arr ..load on pc too

// join,  .includes ,  .indexOf
const newArr = myArr.join()
console.log(myArr)
console.log(newArr);
console.log(typeof newArr);


//slice , splice
  

const myn1 = myArr.slice(1,3) //slice -->not manipulate the array
console.log(myn1);
console.log("A ",myArr);



                                //splice--> manipulate the array
const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("B ", myArr);
