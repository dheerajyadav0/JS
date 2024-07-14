//date

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0 ,23)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myTime = Date.now()
console.log(myTime);
let checkoutTime = new Date("03-19-2024")
console.log(checkoutTime.getTime());
//getMinutes, getMonth, getSeconds,getTime...etc
console.log(checkoutTime.getMonth());

//we always get time in milisec so for sec 
console.log(Math.floor(Date.now()/1000)); 
//we use math to avoid decimal values


//LocaleString alternate
checkoutTime.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})