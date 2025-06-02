function add(a,b){
    return a+b;
}
function mul(x){
     return x*2;
}
function  square(val){
     return val*val;
}

 function  compose(fn1,fn2,fn3){
    return function(a,b){
    
     return fn3(fn2(fn1(a,b)));

     
    };
 }
//iife 
 const task  =compose(add,mul,square);
 console.log(task(2,3));

 (function add(a,b){
    console.log(a+b);
 })(2,3);
 (function say (){
    console.log("hey ");
 })();

 const  value  = (() => 1000)();
 console.log(value);