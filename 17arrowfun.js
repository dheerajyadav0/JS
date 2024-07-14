const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username},welcome to website`);
        
    }//this -> curr context/values ko refer krta h
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);
//bt browser mai mne "window " milega kyuki sbse zyda global object window object hai isliye


function chai(){             //1
    let username = "hitesh"
    // console.log(this);
    console.log(this.username); // mai object mai hi use kr pa rah hu ..aise fun mai this use nhi kr pa rah hu m
}
chai()


// const chai = function(){     //2
//     let username = "hitesh"
//     console.log(this.username);
// } 

// chai()

// dono undefined 
const chaii = () => {     
    let username = "hitesh"
    console.log(this.username);
} 

chaii()

//arrow fun

// const addTwo = (num1 ,num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4));


//alternate --- implicit return
const addTwo = (num1 ,num2) => (num1 + num2)


console.log(addTwo(3,4))