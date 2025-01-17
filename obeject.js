// var human = {
//     "name" : "Mustafa",
//     "gender" : "M",
//       "Age":    20,
//     "height": 5.8,
// };

//      human['wearing'] = "Jacket";
// // var FF = "Age";
// // console.log(human[FF]);

// // human.Age = 21;
// // console.log(human[FF]);
// console.log(human.wearing);

// delete human.wearing;
// console.log(human.wearing);

// function lookup(val){
//     var result = "";

//     var lookup = {
//         "alpha": "Lion",
//         "beta": "Elephant",
//         "charlie": "Dog",
//         "gamma": "Zebra"
//     };

//     result = lookup[val];

//     return result;
// }

// console.log(lookup("charlie"));

// var lookup = {
//     "alpha": "Lion",
//     "beta": "Elephant",
//     "charlie": "Dog",
//     "gamma": "Zebra"
// };

// function checkObj(checkProp){
//     if(lookup.hasOwnProperty(checkProp)){
//         return lookup[checkProp];
//     }
//     else {
//         return "Result not found";
//     }
// }
// console.log(checkObj("alpha"));


// Manipulating complex objects

// var movie = [
//     {
//     "artist": "Leo",
//     "releaseYear": 1990,
//     "title": "Romeo",
//     "format": [
//         "CD",
//         "8T",
//         "LP"
//     ],
//     "gold": true
// },
//     {"actor": "Guong-chou",
//      "releaseYear": 2024,
//      "title": "Squid Game",
//      "format":[
//         "youtube video",
//         "X video",
//         "Insta Video",
//         "Facebook Video"
//      ] 
//     }
// ]

// console.log(movie[1].format[1]); 



// var myStorage ={
//     "car":{
//      "inside": {
//         "glovebox": "maps",
//         "passenger seats": "crumbs"
//      },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
// };
// console.log((myStorage.car.outside["trunk"]));


// var movieProfiles = [
//     {
//         title: "The Shawshank Redemption",
//         director: "Frank Darabont",
//         releaseYear: 1994,
//         genres: ["Drama", "Crime"],
//         cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
//         rating: 9.3
//     },
//     {
//         "title": "Inception",
//         director: "Christopher Nolan",
//         releaseYear: 2010,
//         genres: ["Action", "Adventure", "Sci-Fi"],
//         cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
//         rating: 8.8
//     },
//     {
//         title: "The Godfather",
//         director: "Francis Ford Coppola",
//         releaseYear: 1972,
//         genres: ["Crime", "Drama"],
//         cast: ["Marlon Brando", "Al Pacino", "James Caan"],
//         rating: 9.2
//     }
// ];

// function lookupProfile(title, prop) {
//     for (var i = 0; i < movieProfiles.length; i++) {
//         if (movieProfiles[i].title === title) {
//             return movieProfiles[i][prop] || "No such property";
//         }
//     }
//     return "No such movie profile";
// }

// var data = lookupProfile("Inception", "title");
// console.log(data);  // Output: "Christopher Nolan"

// function randomNo() {
//     var randomNumbers = [];
//     for (var i = 0; i < 50; i++) {
//         randomNumbers.push(Math.random()); // Add random number to the array
//     }
//     return randomNumbers; // Return the array of random numbers
// }

// console.log(randomNo()); // Output: Array of 5 random numbers

// function ourRandomRange(ourMin , ourMax) {
//     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
// }

// console.log(ourRandomRange(5,7));

// function convertToInteger(str){
//     return parseInt(str);
// }
// console.log(convertToInteger(Math.floor(94.5)));

// function convertToInteger(str){
//     return parseInt(str,2);
// }
// console.log(convertToInteger("1010"));

// function checkAge(age){
//     return (age>18) ? "You are 18 years old" : "You are below 18";
// }
// console.log(checkAge(11));

// function checkSign(num){
//     return (num>0) ? "Positive" : (num < 0) ? "Negative" : "Zero"
// }
// console.log(checkSign(0));

//    function checkScope(){
//     "use strict";

//     let i = "function scope";

//     if(true){

//         let i = "block scope";
//         console.log("Block scope is " + i);
//    }

//    console.log("Function scope is " + i);
//    return i;
//    }

//   checkScope();

// const magic =() => new Date();
// console.log(magic());

// const magic= (arr1,arr2) => arr1.concat(arr2);
// console.log(magic([1,2],[5,3,13,4]));

// const num = [1,5,3,2,6,3,8];

// const result = num.filter(number => number % 2 === 0).map(number => number * number);

// console.log(result);

// const sum = (function(){
//   return function sum(...args){
//    return args.reduce((a,b) => a + b, 0);
// };
// })();

// console.log(sum(1,2,3,4));