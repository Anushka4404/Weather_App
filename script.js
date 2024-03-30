const main =document.getElementById("main")
const form =document.getElementById("form")
const search =document.getElementById("search")
const API_key ='dofd79c22da8e4dd18f9a3154911fd55'
const url =(city)=>{
    return `https://api.openweathermap.org/data/2.5/weather?q-$(city)&appid-$(API_key)`
}

async function addWeatherDeatils(city){
    const resp =await fetch(url(city,{origin:"cors"}))
    const respData =await resp.json()
    console.log(respData)
    addWeatherToPage(respData)
}
function addweatherToPage(data){
    const temp = Ktoc(data.main.temp)
    const weather = document.createElement('div')
    weather.classlist.add('weather')

    weather.innerHTML =`
    <h2>
    <img src="https://openweathermap.org/img/wn/$(data.weather[0].icon)@2x.png">
    ${temp} C
    <img src="https://openweathermap.org/img/wn/$(data.weather[0].icon)@2x.png">
    </h2>
    <small>${data.weather[0].main}</small>
    `;
    main.innerHTML=""
    main.appendChild(weather)
}

function Ktoc(K){
    return Math.floor(K - 273.15)
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const city=search.value

    if(city){
        getWeatherDeatils(city)
    }
})