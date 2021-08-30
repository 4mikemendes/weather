const submit = document.getElementById("submit")
const today = "Today"
const tomorow = "Tomorow"
const dAT = "Day after tomorow"
submit.addEventListener("click", function() {
const city = document.getElementById("input").value
console.log("submit")
document.getElementById("input").value = ''

fetch(`https://apis.scrimba.com/openweathermap/data/2.5/forecast?q=brussels&units=metric`)
.then(response => response.json())
.then(data => {
  const {city, list } = data

  document.getElementById('name').innerHTML = `City: ${city.name}`,
  document.getElementById("today").innerHTML = `${today}`,
  document.getElementById('temp-today').innerHTML = `Temperature: ${list[0].main.temp}`,
  document.getElementById('feels_like-today').innerHTML = `Feels like: ${list[0].main.feels_like}`,
  document.getElementById('clouds-today').innerHTML = `Clouds: ${list[0].weather[0].description}`,
   document.getElementById("tomorow").innerHTML = `${tomorow}`,
  document.getElementById('temp-2').innerHTML = `Temperature: ${list[1].main.temp}`,
  document.getElementById('feels_like-2').innerHTML = `Feels like: ${list[1].main.feels_like}`,
  document.getElementById('clouds-2').innerHTML = `Clouds: ${list[1].weather[0].description}`,
  document.getElementById("day-after-tomorow").innerHTML = `${dAT}`,
    document.getElementById('temp-day-aftertomorow').innerHTML = `Temperature: ${list[2].main.temp}`,
  document.getElementById('feels_like-day-aftertomorow').innerHTML = `Feels like: ${list[2].main.feels_like}`,
  document.getElementById('clouds-day-aftertomorow').innerHTML = `Clouds: ${list[2].weather[0].description}`
  console.log(data)

})

})

// fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=brussels&units=metric")
// .then(res => res.json())
// .then(data => console.log(data))

fetch("https://apis.scrimba.com/openweathermap/data/2.5/forecast?q=brussels&units=metric")
.then(res => res.json())
.then(data => console.log(data))
