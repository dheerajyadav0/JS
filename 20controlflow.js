//if

if (true){
// code execute hoga

}
if (false){
// line no. 7 se code execute nhi hoga

}


if(3 != 2){

    //code execute hoga bcz condition true hai 
    }


    if(2 == "2"){
        console.log("executed");
       
        }
         

//<, > ,<= ,>= ,==(nhi krta), ===(datatype check krta hai) , !=


const temperature = 41
if (temperature <50){
    console.log("less than 50");
}else{
console.log("greater than 50");
}

const score = 200
if (score > 100){
    let power = "fly"
    console.log(`user poower :${power}`);
}
//console.log(`user poower :${power}`);  due to declarartion of scope
 

//short hand notation
const balance = 1000
if(balance > 500) console.log("test"),console.log("test2");;  //shortcut

if (balance< 500){
    console.log("less than");

}else if(balance < 750){
    console.log("less than 750");
} else {
    console.log(" less than 1200");
}


const userloggIn = true
const debitCard = true

const loggedInfromGoogle = false
const loggedInfrommEmail = true

if(userloggIn && debitCard  && 2==3 ){
    console.log("Allow to buy course");
}

if(loggedInfromGoogle || loggedInfrommEmail){
    console.log("user logged in");
}