const button  = document.getElementById('get-location-button');

 async function getData(lat,long) {
     const promise  = await   fetch(`http://api.weatherapi.com/v1/current.json?key= f420800889764c8b804164717253105&q=${lat},${long}&aqi=yes`);
     return await promise.json();
}



async function gotlocation(position){
  const result = await getData(position.coords.latitude, position.coords.longitude);
  console.log(result);
};



function failedlocation(){
     console.log("there was some issue");
}
button.addEventListener('click', async () => {
   navigator.geolocation.getCurrentPosition(gotlocation,failedlocation )
});