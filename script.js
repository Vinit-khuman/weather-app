const apikey = "fc7840444c0961ebc8700f956ec1e036";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=fc7840444c0961ebc8700f956ec1e036&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();    
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./weather-app-img/images/clouds.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./weather-app-img/images/mist.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./weather-app-img/images/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./weather-app-img/images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./weather-app-img/images/drizzle.png"
    }else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "./weather-app-img/images/haze.png"
    }
    
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";
    }

    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

