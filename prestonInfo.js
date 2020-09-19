

const apiUrl= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=21e36e86016678aa6f98437527607b95';
fetch (apiUrl)
.then((Response)=>Response.json())
.then ((jsObject)=> {
    console.log(jsObject);
  
    const infoPreston = jsObject;
    document.getElementById('currently').textContent=infoPreston.weather[0].main;
    document.getElementById('temperature').textContent=infoPreston.main.temp;
    document.getElementById('windspeed').textContent=infoPreston.wind.speed;
    document.getElementById('humidity').textContent=infoPreston.main.humidity;

}
);
