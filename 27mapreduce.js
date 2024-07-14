// const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newnum = myNums.filter( (num) => num>4)


// const newnum = myNums.filter( (num) =>{

//     return num>4            //scope laga diye isliye return lagaya "arrow fun"
// })

// console.log(newnum);

// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


//map
const myNumers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumers
                        .map( (num) => num +10 )
                        .map( (num) => num +1)
                        .filter( (num)=> num>=40)   //chaining
console.log(newNums);

