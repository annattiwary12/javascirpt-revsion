 

 //without Promise
 function loadScript(src ,callback){
    const script  = document.createElement('script');


    script.src = src;
    script.onload  = () => callback(null,script);
    script.onerror = (err)  => callback(err);

    document.appendChild(script);
 }
