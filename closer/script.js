// function add(a){
//     return function(b){
//         return function(c){
//              return a+b+c;
//         };

//     };

// }

const add = (a) => (b)  =>(c) =>  a+b+c;
console.log(add(2)(3)(8));
const sendAutoEmail =  to =>(subject)  =>body => 
    `Sending Email to ${to} with subject ${subject}: ${body}`;

let step1  = sendAutoEmail("ananttiwaery12@gmail.com");
let step2 = step1("New order confirmation");

console.log(step2("hey anant, here is something for you "));


