let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData = async() =>{
        let key = "6921530ba1a9044fcf1fd10687ef8cb6"
        let place = document.querySelector("#location").value
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput =await data.json()
        console.log(finalOutput)
        let tempValue = document.querySelector(".temp_value")
        let humidValue = document.querySelector(".humid_value")
        let weatherCondition = document.querySelector("#weather_condition")

        let finalTemp =Math.round(finalOutput.main.temp-273)
        let finalHumid = (finalOutput.main.humidity)
        let finalCondition = (finalOutput.weather[0].main).toLowerCase()
        console.log(finalCondition)
        
        tempValue.innerHTML=`${finalTemp} <sup>0</sup>C`
        humidValue.innerHTML=`${finalHumid} kmph`
        weatherCondition.innerHTML=`${finalCondition}`


      let weatherImage = document.getElementById("img")
      let background = document.getElementById("main_container")
      switch(finalCondition){
        case "haze":
            weatherImage.src = './assets/Haze.jpg'
            background.style.backgroundImage="url(./assets/background_haze.gif)"
            break;
        case "dust":
            weatherImage.src = './assets/dust.avif'
            background.style.backgroundImage="url(./assets/background_dust.gif)"
            break;
        case "clouds":
            weatherImage.src = './assets/clouds.webp'
             background.style.backgroundImage="url(./assets/background_clouds.gif)"
            break;
        case "snow":
            weatherImage.src = './assets/snow.jpg'
             background.style.backgroundImage="url(./assets/background_snow.gif)"
            break;
        case "rain":
            weatherImage.src = './assets/Rain.avif'
             background.style.backgroundImage="url(./assets/background_rain.gif)"
            break;
        case "mist":
            weatherImage.src = './assets/mist.jpeg'
             background.style.backgroundImage="url(./assets/background_mist.gif)"
            break;
        default :
            weatherImage.src="./assets/weather_favicon.png"
               background.style.backgroundImage="url(./assets/background_default.gif)"
      }
    }
    fetchData()
})