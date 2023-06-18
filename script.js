let UserInput = document.querySelector('.search-input')
let button = document.querySelector('.btn');
var cityElement = document.querySelector('.city');
var locateElement = document.querySelector('.locate');
var wetherImg=document.querySelector('.weather-image')
var dateInfoElement = document.querySelector('.dateInfo');
var temperatureElement = document.querySelector('#temperature');
var elements = document.querySelectorAll('.Weather-desc span');



button.addEventListener('click', function () {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${UserInput.value}&units=metric&appid=bd6d61156c5295d91d286d9c4fe31a63`)
     .then((response) => response.json())
     .then(displayAPI)
     .catch((err)=> alert("Enter correct city name"))

})

const displayAPI=(weather) =>{
cityElement.innerText=`${weather.name}`;
locateElement.innerHTML=`${weather.name}, ${weather.sys.country}`;
let now = new Date();
dateInfoElement.innerHTML= dateBuilder(now);
wetherImg.style.marginLeft='15rem'
temperatureElement.innerHTML=`${Math.round(weather.main.temp)}`;
// elements.innerHTML=`${weather.weather[0].description}`;

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
    return `${day}, ${date}, ${month}, ${year}`;
  }
  




//  I wanted to know if DOM worked fine
// cityElement.innerHTML="Mwanza";
// locateElement.innerHTML="Mbeya";
// dateInfoElement.innerHTML= "to day date";
// temperatureElement.innerHTML="am javascript temperature";
// // humidityElements[0].innerHTML='high';
// // pptElements[0].innerHTML ="low";
// // windElements[0].innerHTML='strong'
// elements[0].innerHTML = 'high';
// elements[1].innerHTML = 'low';
// elements[2].innerHTML = 'strong';
// elements[3].innerHTML = 'here we go';

