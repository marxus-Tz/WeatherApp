let UserInput = document.querySelector('.search-input')
let button = document.querySelector('.btn');
var cityElement = document.querySelector('.city');
var locateElement = document.getElementById('location');
var wetherImg=document.querySelector('.weather-image')
var dateInfoElement = document.querySelector('.dateInfo');
var temperatureElement = document.querySelector('#temperature');
var elements = document.querySelectorAll('.Weather-desc span');



button.addEventListener('click', function () {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${UserInput.value}&units=metric&appid=bd6d61156c5295d91d286d9c4fe31a63`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      return response.json();
    })
    .then(displayAPI)
    .catch(error => {
      alert("Error: " + error.message);
    });
});


const displayAPI=(weather) =>{
cityElement.innerText=`${weather.name}`;
locateElement.innerText=`${weather.name}, ${weather.sys.country}`;
let now = new Date();
dateInfoElement.innerHTML= dateBuilder(now);
// wetherImg.style.marginLeft='10rem'
temperatureElement.innerHTML=`Temperature:${Math.round(weather.main.temp)+ "°C"}`;

elements[0].innerHTML = `Description:${weather.main}`;
elements[1].innerHTML = `Humidity:${weather.main.humidity +"%"}`;
elements[2].innerHTML = `wind speed:${weather.wind.speed +"Km/h"}`;

}


function dateBuilder(d) {
    let Months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = Months[d.getMonth()];
    let year = d.getFullYear();

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
  
    let timezoneOffset = d.getTimezoneOffset() / 60; // Convert minutes to hours 
    let timezoneHours = Math.abs(Math.floor(timezoneOffset));
    let timezoneMinutes = Math.abs(timezoneOffset % 1 * 60);
  
    let timezone = `${("0" + timezoneHours).slice(-2)}:${("0" + timezoneMinutes).slice(-2)}`;
  
    return `${day}, ${date}, ${month}, ${year}, ${hours}:${("0" + minutes).slice(-2)} ${ampm},`;
    // return `${day}, ${date}, ${month}, ${year}`
  }

//  I wanted to know if DOM worked fine
// cityElement.innerHTML="Mwanza";
// locateElement.innerHTML="Mbeya";
// dateInfoElement.innerHTML= "to day date";
// temperatureElement.innerHTML="am javascript temperature";
//
// elements[2].innerHTML = 'strong';
// elements[3].innerHTML = 'here we go';

