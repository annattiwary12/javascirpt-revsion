const sayHello = () =>{
    console.log("hello i am anant tiwaery");
}

const sayfirst = (a,b) =>{
    console.log(a+b);
}

const obj  ={
    value:34,
    myfunction :function(){
         console.log(this);
    }
}

sayHello();
sayfirst(8,9);
obj.myfunction();


