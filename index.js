const temp=document.querySelectorAll('.temp')
const wind=document.querySelector('#wind')
const max=document.querySelector('#maxt')
const min=document.querySelector('#mint')

const timei=document.getElementById('time')
// Clock

function clock(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() ;
    timei.innerHTML=time;
}

setTimeout(() => {
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var dateTime = time;

}, 1000);



function getweather(city){
    console.log('clcik')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2b331b6404msha7c6cae07cad5b3p133d32jsn5654a170764e',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) =>{ 
                Cloud_pct=response.cloud_pct
                Feels_like=response.feels_like
                Humidity=response.humidity
                max.innerHTML=response.max_temp
                min.innerHTML=response.min_temp
                Sunrise=response.sunrise
                Sunset=response.sunset
                temp[0].innerHTML=response.temp
                wind_degrees=response.wind_degrees
                wind.innerHTML=response.wind_speed
    
            (console.log(response))})

        .catch(err => console.error(err));
    
}

document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();
    let input=document.getElementById('input').value;
    getweather(input);
})

function curtime(){
    
}


var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

console.log(dateTime)