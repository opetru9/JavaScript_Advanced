



function renderData(data) {
    let iconPath        = data.weather[0].icon
    let iconURL         = `https://openweathermap.org/img/wn/${iconPath}@2x.png`
    let now             = new Date()
    let correctCityName = data.name
    let description     = data.weather[0].description
    let temp            = data.main.temp + " °C"
    let tempMin         = data.main.temp_min
    let tempMax         = data.main.temp_max
    let fellsLike       = data.main.feels_like
    let humidity        = data.main.humidity
    let pressure        = data.main.pressure
    let windSpeed       = data.wind.speed
    

    const mainDivElement = document.getElementById('main-block')
        mainDivElement.innerHTML = ""
    let weatherIcon = document.createElement('img')
        weatherIcon.src = iconURL
    let weatherDescription = document.createElement('div')
        weatherDescription.innerText = description
        weatherDescription.setAttribute('class','description')
    let cityNameTitle = document.createElement('h1')
        cityNameTitle.innerText = `${correctCityName}`
    let dataSubtitle = document.createElement('h5')
        dataSubtitle.innerText = now.toLocaleDateString() + " , " + now.getHours() + ":" + now.getMinutes()
    let Temp    = document.createElement('h2')
        Temp.innerText = temp

    let flexContainer = document.createElement('div')

    let flexItemName  = document.createElement('div')
    let nameUl        = document.createElement('ul')
    let nameTempMinLi    = document.createElement('li')
        nameTempMinLi.innerText = "Temp-Min"
    let nameTempMaxLi    = document.createElement('li')
        nameTempMaxLi.innerText = "Temp-Max"
    let nameFellsLikeLi    = document.createElement('li')
        nameFellsLikeLi.innerText = "Fells Like"
    let nameHumidityLi    = document.createElement('li')
        nameHumidityLi.innerText = "Humidity"
    let namePressureLi    = document.createElement('li')
        namePressureLi.innerText = "Pressure"
    let nameWindSpeedLi    = document.createElement('li')
        nameWindSpeedLi.innerText = "Wind Speed"

    let flexItemData  = document.createElement('div')
    let dataUl = document.createElement('ul')
    let dataTempMinLi = document.createElement('li')
        dataTempMinLi.innerText = tempMin
    let dataTempMaxLi = document.createElement('li')
        dataTempMaxLi.innerText = tempMax
    let dataFellsLikeLi = document.createElement('li')
        dataFellsLikeLi.innerText = fellsLike
    let dataHumidityLi = document.createElement('li')
        dataHumidityLi.innerText = humidity
    let dataPressureLi = document.createElement('li')
        dataPressureLi.innerText = pressure
    let dataWindSpeedLi = document.createElement('li')
        dataWindSpeedLi.innerText = windSpeed

    mainDivElement.appendChild(cityNameTitle)
    mainDivElement.appendChild(dataSubtitle)
    mainDivElement.appendChild(Temp)
    mainDivElement.appendChild(weatherDescription)
    mainDivElement.appendChild(weatherIcon)
    mainDivElement.appendChild(flexContainer)

    flexContainer.appendChild(flexItemName)
    flexContainer.appendChild(flexItemData)

    flexItemName.appendChild(nameUl)
    nameUl.appendChild(nameTempMinLi)
    nameUl.appendChild(nameTempMaxLi)
    nameUl.appendChild(nameFellsLikeLi)
    nameUl.appendChild(nameHumidityLi)
    nameUl.appendChild(namePressureLi)
    nameUl.appendChild(nameWindSpeedLi)

    flexItemData.appendChild(dataUl)
    dataUl.appendChild(dataTempMinLi)
    dataUl.appendChild(dataTempMaxLi)
    dataUl.appendChild(dataFellsLikeLi)
    dataUl.appendChild(dataHumidityLi)
    dataUl.appendChild(dataPressureLi)
    dataUl.appendChild(dataWindSpeedLi)
    
    
    inputElement.value = "";
}
load(renderData, cityName)