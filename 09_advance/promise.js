const PromiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()

    },1000)
})

PromiseOne.then(function(){
    console.log("promise consumed");
})

//----> sb ek mai hi kr diya

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("sync task 1");
//         resolve()
//     } ,1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })


//network se data aaya ho vo data bhi pass krna h
const promiseThree =new Promise(function (resolve,reject) {
    setTimeout(function(){
        resolve({username: "chai", email : 
            "chai@example.com"})
          //iss case m data object form m h
    },1000)
    
})

 promiseThree.then(function(user){  /// user isliye liya bs le liya kyuki kuch na kuch toh return krega
    console.log(user);
 })


 promisefour = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "chai", email : 
            "chai@example.com"})                //resolve m data pass hoga
            }else{
                reject("something went wrong")
            }
    },1000)
 })

 promisefour.then((user)=>{   // just arrow fun use kiya h
     console.log(user); 
     return user.username                      
 }).then((username)=>{
    console.log(username);
 }).catch(function(error){
    console.log(error);    // error= true-->hai toh catch se error print ho jayga
 }).finally(()=>console.log("The promise is either resolved or rejected"));



 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username: "cheesemutton", email : 
            "teacoffee"})                //resolve m data pass hoga
            }else{
                reject("JS went wrong")
            }
    },1000)
 })

