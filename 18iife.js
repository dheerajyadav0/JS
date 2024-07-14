// Immediate Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
    
// }
// chai()

//return krne ki jhagh brackets bhi laga skte hai ... ==>/

(function chai() {
    console.log(`DB CONNECTED`);    //named IIFE
    
})
();        //for ending the code

//global scope k pollution ko hatane k liye iife ka use krte hai

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   //unnamed IIFE
})('dheeraj')

//same as 'chai('dheeraj)'