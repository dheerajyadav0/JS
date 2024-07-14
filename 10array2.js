const marvel_heros = ["thor","ironman","hukk"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)   //push
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// all_hero = marvel_heros.concat(dc_heros)   //concate
// console.log(all_hero);


 const all_new_heros = [...marvel_heros , ...dc_heros]      //spread 
 console.log(all_new_heros);

 const another_arr = [1, 2, 3, [4, 5 , 6],[7 ,6 ,[9, 8]]]
 const curr_arr = another_arr.flat(Infinity)
 console.log(curr_arr);


 console.log(Array.isArray("dhee"));   //check array or not
 console.log(Array.from("dheera"));    //covert in array

 let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.of(score1, score2, score3));