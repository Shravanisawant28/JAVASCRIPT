const apiKey="8eb02eb541767e1faf7bbe40ce4e8566";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search-bar input")
const searchBtn=document.querySelector(".search-bar button")
const weatherIcon =document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`)
  

    if(response.status == 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
        return;
    }

        var data= await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="mist.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="drizzle.png"
    }
    else{
        weatherIcon.src =""
    }
    
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"


}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})



// const apiKey = "8eb02eb541767e1faf7bbe40ce4e8566";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search-bar input");
// const searchBtn = document.querySelector(".search-bar button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

//         if (!response.ok) {
//             document.querySelector(".error").style.display = "block";
//             document.querySelector(".weather").style.display = "none";
//             return;
//         }

//         const data = await response.json();

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

//         switch (data.weather[0].main) {
//             case "Clouds":
//                 weatherIcon.src = "clouds.png";
//                 break;
//             case "Clear":
//                 weatherIcon.src = "clear.png";
//                 break;
//             case "Rain":
//                 weatherIcon.src = "rain.png";
//                 break;
//             case "Mist":
//                 weatherIcon.src = "mist.png";
//                 break;
//             case "Drizzle":
//                 weatherIcon.src = "drizzle.png";
//                 break;
//             default:
//                 weatherIcon.src = "";
//                 break;
//         }

//         document.querySelector(".weather").style.display = "block";
//         document.querySelector(".error").style.display = "none";

//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     }
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });
