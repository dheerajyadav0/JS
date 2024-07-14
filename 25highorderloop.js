//for of

// ["","",""]
// [{},{},{}]
const arr = [1,2,3,4,5]

for (const iterator of arr) {
    console.log(iterator);
}
for (const iterator in arr) {  //arr ki keys dega value ki jhagh
    console.log(iterator);
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//maps par for of loop
const map = new Map() // koi duplicate value nhi hoti sari unique hoti h
map.set('IN',"India")
map.set('USA',"unites states")

console.log(map);

// for (const key of map) 
for (const [key,value] of map) {
    
    console.log(key,':-',value);
}

//object par for of loop
// const myObject = {
//     game1 : 'coc'
//     game2 : 'pop'            //obj ARE NOT ITERable in for of
// }                            // maps are not iteratble in for in
// for (const [key,value] of myObject) {
//     console.log(key,':',value);
// }

//for in

const myObject = {
    js : 'javascript',
    cpp: 'c++',
    j : 'java',
}
for (const key in myObject) {
    console.log(`${key} shortcut ${myObject[key]}`);
}