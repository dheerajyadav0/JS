//singleton
//object.create

//object literals

const mySyym = Symbol("key1")  //to declare symbol

const JsUser = {
    name:"hitesh",
    "full name" : "dheeraj yadav",
    age :18,
    location :"Jaipur",
    email : "dheeraj@google.com",
    isLoggedIn : false,
    lastLoginDays:["monday","saturday"],
   [mySyym]: "myKey"
}

console.log(JsUser.name);
console.log(JsUser["name"]); //alternate

console.log(JsUser["full name"]); //this only access by alternate


console.log(JsUser[mySyym]); //++++use symbol as a key

//+++++++ change the key values
JsUser.email = "dheerajyadavas"

//+++++++ how to freeze the values?
//Object.freeze(JsUser)  //*** */

JsUser.email = "dheerajraos"  //now NO propogation/change in object seen

console.log(JsUser);



//declare fun
JsUser.greeting = function(){
    console.log("hello JS user");

}

console.log(JsUser.greeting());
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`); // hme obj k andar name ko reference krna h

}




