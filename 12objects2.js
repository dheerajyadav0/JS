//sigleton object 
//const tinderUser =new Object()

//non singleton obj 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.IsLoggedIn = false


console.log(tinderUser);

// obj k andar obj

const regularUser = {
    email : "some@gamil.com",
    fullname : {
        userfullname :{
            firstname: "dheeraj",
            lastname:"yadavas"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

//combining of obj
const obj1 = {1 : "a" ,2:"b"}
const obj2 = {3 : "c" ,4:"d"}

// const obj3 = Object.assign({}, obj1,obj2)  //mdn syntax

const obj3 = {...obj1 , ...obj2}
console.log(obj3);


//objects in array

const Users = [
    {

    },
    {

    }
]


console.log(tinderUser);
// to accesss keys
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));