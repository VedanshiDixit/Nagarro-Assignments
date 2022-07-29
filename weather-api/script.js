const name = document.querySelector("#search");
const result = document.querySelector("#result");
let APIKey = "cd302faca1a6db737efb4b56d804aae0";

name.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeatherData();
  }
});

function getWeatherData(){
    const inputValue = name.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${APIKey}`;
    if (inputValue !== "") {
        fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            if (data.Response === "False") {
                result.innerHTML = `<h2>Location Not Found</h2>`
            }
            else{
                result.innerHTML = `
                                    <div class="temp">
                                        <h4>  &ensp; ${data.main.temp}<br><span>Temperature </span></h4>
                                        <h4> &nbsp;  ${data.main.feels_like}<br> <span>Feels Like </span></h4>
                                    </div>
                                    <div class="maxmin">
                                        <h4>&ensp; ${data.main.temp_max}<br><span>Maximum Temp</span></h4>
                                        <h4>&emsp;  ${data.main.temp_min}<br> <span>Minimum Temp </span></h4>
                                    </div>
                                    <div class="ph">
                                        <h4>&nbsp; ${data.main.pressure}<br><span>Pressure</span></h4>
                                        <h4>&ensp;  ${data.main.humidity}<br> <span> Humidity</span></h4>
                                    </div>
                                    `
            }
        })
    }
}

