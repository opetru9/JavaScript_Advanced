let formElement  = document.getElementById('form')
let inputElement = document.getElementById('input')
let cityName     = "chisinau";
const myApiKey   = '5870b5c25b136eae341354f20b9b15f3';

formElement.addEventListener('submit', onSubmit)
function onSubmit(e) {
    e.preventDefault()
    cityName = inputElement.value
    load(renderData ,cityName)
}

function load(cb, cityName) {
    const cachedData = loadDataFromCache(cityName);
    // check if there is the data into the Cache / or if cachedData is not null or undefined:
    if (cachedData) {
        cb(cachedData);
    } else {
        // If there is not the data in the cache, load the data from API for the specific city:
        loadDataFromAPI(cityName, renderData)
    };
}

// CACHE / local storage
function saveDataToCache(key, data) {
    localStorage.setItem(key, JSON.stringify(data))

    setTimeout(() => {
        localStorage.removeItem(key);
    }, 60 * 60 * 1000);
}
function loadDataFromCache(key) {
    return JSON.parse(localStorage.getItem(key))
}
function checkDataInCache(key) {
    return localStorage.getItem(key)
}

function loadDataFromAPI(city, cb) {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`
    let xhr = new XMLHttpRequest
    xhr.open('GET', weatherApi)
    xhr.send()
    xhr.onload = () => {
        let data = JSON.parse(xhr.responseText)
        saveDataToCache(city, data)
        cb(data)
    }
}

