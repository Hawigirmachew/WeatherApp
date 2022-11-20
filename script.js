// initializing variables
const form = document.getElementById("form_city");
// console.log(form)
const input_field = document.getElementById("city");
// creating list for the weather description
function weatherDescription(data) {

  console.log(data);
  //convert temprature from Kelvin to celsuis
  const celsius = Math.round(data.main["temp"] - 273.15)
  console.log()
  const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`;
  const app_weather = document.querySelector(".list_cities_weather");
  const list = document.createElement("li");
  list.classList.add("city_weather");
  list.innerHTML = ` <aside class="name_temp">
  <h2 class="city_name">${data.name}</h2>
  <span class="temp">${celsius}<sup>℃</sup></span>
</aside>
<div class="image_type">
  <img
    src="${icon}"
    alt=""
    class="iconOfTheWeather"
  />
  <p class="weather_type">${data.weather[0]["description"]}</p>
</div> 
   `;
  app_weather.appendChild(list);
}
//api key
const apiKey = "f3b013297faebef89fdb512c3bfc6bd8";
// array for name of the cities
const arrCity = []
function findTheCity(e) {

  e.preventDefault();
  const msg = document.querySelector(".message")

  const city = input_field.value;
  
    if(city === ""){
      msg.innerHTML = "Enter a city name"
    }
    else{
        msg.innerHTML = ""  
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
        `)
       .then((res) => res.json())
       .then((data) => weatherDescription(data))
       .catch(err => console.error(err));
     
        
    }
    input_field.value=""
   
//   console.log(arrCity)
  
  
}

form.addEventListener("submit", findTheCity);
//
