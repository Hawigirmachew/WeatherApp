 // initializing variables
const form = document.getElementById("form_city");
// console.log(form)
const input_field = document.getElementById("city");
// creating list for the weather description
function weatherDescription(data) {

  console.log(data);
  
  // const [weather,main] = data
  //convert temprature from Kelvin to celsuis
  const celsius = Math.round(data.main["temp"] - 273.15)
// 
  const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`;
  const app_weather = document.querySelector(".list_cities_weather");
  const list = document.createElement("li");
  list.classList.add("city_weather");
  list.innerHTML = ` <aside class="name_temp">
  <h2 class="city_name">${data.name}</h2>
  <h3 class="temp">${celsius}<sup>℃</sup></h3>
</aside>
<div class="image_type">
  <img
    src="${icon}"
    alt=""
    class="iconOfTheWeather"
  />
  <p class="weather_type">${data.weather[0]["description"]}</p>
</div> 
<span class="span1"></span>
<span class="span2"></span>
<span class="span3"></span>
<span class="span4"></span>
   `;
  app_weather.appendChild(list);
}
//api key
const apiKey = "f3b013297faebef89fdb512c3bfc6bd8";
// array for name of the cities
// const arrCity = []
function findTheCity(e) {

  e.preventDefault();
  const msg = document.querySelector(".message")

  const city = input_field.value;
  //if user enters an empty 
    if(city === ""){
      msg.innerHTML = "Enter a city name"
    }
   
    else{
      
        msg.innerHTML = ""  
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
        `)
       .then((res) => res.json())
       .then((data) => weatherDescription(data))
       // the user can only enter country name or proper city name 
       .catch(err =>  msg.innerHTML = "Only enter City name or Country name");
     
        
    }
    input_field.value=""
   
//   console.log(arrCity)
  
  
}

form.addEventListener("submit", findTheCity);
//
