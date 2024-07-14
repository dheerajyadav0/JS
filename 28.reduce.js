const mynums = [1,2,3]

// const mytotal = mynums.reduce( function(acc,currval){
//     console.log(` ${acc} and ${currval}`);
//     return acc + currval
// })
// console.log(mytotal);


// /aarow fumn
const mytotal = mynums.reduce( (acc,curr) =>acc+curr,0)
console.log(mytotal);