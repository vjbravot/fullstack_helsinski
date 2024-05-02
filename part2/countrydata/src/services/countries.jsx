import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all/'
const baseUrl2= 'https://studies.cs.helsinki.fi/restcountries/api/name'
const urlweather = 'https://api.openweathermap.org/data/2.5/weather?q='
const api_key = import.meta.env.VITE_SOME_KEY
const getNames = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getCountry = ({name}) => {
    const request = axios.get(`${baseUrl2}/${name}`)
    return request.then(response => response.data)
}

const getWeather = ({cityName}) =>{
    console.log("here")
    console.log(`${urlweather}${cityName}&appid=${api_key}`)
    const request = axios.get(`${urlweather}${cityName}&appid=${api_key}`)
    return request.then(response => response.data)
}

export default {getNames, getCountry, getWeather}