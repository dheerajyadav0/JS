// let  a = 10
// const b = 20 
var c = 300

if ( true){
    let  a = 10
    const b = 20 
    var c = 30
}
//console.log(a);
//console.log(b);
console.log(c);

function one() {
    username = "dheeraj"

    function two() {
       website = "youtube"
        console.log(username); // baccha bade se ice cream mang skta hai not vice versa
    }
   // console.log(website);
    
    two()
}
//one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//++++++++++++intresting+++++++++++


function addOne(num) {
    return num + 1
    
}
console.log(addone(5)) ;  

                             //hoisting
const addTwo = function addone(num) {
    return num + 2
    
}
addone(5)