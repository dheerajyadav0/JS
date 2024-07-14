const name = "dheeraj"
const bodycount = 5

console.log(`hello my name is ${name} and my body count is ${bodycount}`);

const gameName = new String("dheerna")
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));   //idx ka character dekhne k liye

console.log(gameName.indexOf('v'));//character ka idx dekhne k liye

//slice
const gamePlay = "clashofclans"
const anothergame = gamePlay.slice(0,4)
console.log(anothergame);

//substring
const newstring = gamePlay.substring(-8,4)
console.log(newstring);

//trim
const naam ="  dheeraj  "
console.log(naam);
console.log(naam.trim());

//replace
const url = "http://dheeraj#23yadav20"
console.log(url.replace('#23','  '));

//include
console.log(url.includes('dheeraa'));

