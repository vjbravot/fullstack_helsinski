import countryService from '../services/countries'
import {useState, useEffect} from 'react'

const Weather = ({cityName}) => {

    const [weather,setWeather] = useState(null) 
    useEffect(() => {
        countryService
      .getWeather({cityName})
      .then(result => {
        setWeather(result)
              }
      )}, [])
    console.log(weather)
    return(
          <>
            {weather != null &&
            <div>
            <p> feels like: {weather.main.feels_like} K</p>
            <p> actual temp: {weather.main.temp} K </p>
            <p>humidity: {weather.main.humidity} percent</p>
            </div>}
          </>
            )
}

export default Weather