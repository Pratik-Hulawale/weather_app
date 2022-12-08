function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes;
}
console.log(msToTime(1670502486));

// CLOCK
function clock() {
    var d = new Date();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var hr = d.getHours();
    if (sec < 10) {
        sec = "0" + d.getSeconds();
    }
    if (min < 10) {
        min = "0" + d.getMinutes();
    }
    if (hr > 12) {
        hr -= 12;
    }
    var da = hr + ":" + min + ":" + sec;
    let time = document.querySelector("#time");
    time.innerHTML = da;
}

setInterval(() => {
    clock();
}, 1000);

//Variables

let temp = document.querySelector("#temp");
let btn = document.querySelector("#submit");
let feel = document.querySelector("#feellike");
let max = document.querySelector("#maxt");
let min = document.querySelector("#mint");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById("input").value;
    console.log(input);
    getweather(input);
});

// Fetch Api
function getweather(city) {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "2b331b6404msha7c6cae07cad5b3p133d32jsn5654a170764e",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
    };

    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
        options
    )
        .then((response) => response.json())
        .then((response) => {
            // Cloud_pct=response.cloud_pct
            feel.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            max.innerHTML = response.max_temp;
            min.innerHTML = response.min_temp;
            sunrise.innerHTML =msToTime( response.sunrise );
            sunset.innerHTML = msToTime( response.sunset) ;
            // console.log(sunset);
            temp.innerHTML = response.temp;
            // wind.innerHTML = response.wind_degrees;
            wind.innerHTML = response.wind_speed;
            (console.log(response));
        })

        .catch((err) => console.error(err));
}
