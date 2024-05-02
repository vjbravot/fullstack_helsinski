import countryService from '../services/countries'
import {useState, useEffect} from 'react'



const Country = ({name}) => {

    const [country,setCountry] = useState(null) 
      useEffect(() => {
        countryService
      .getCountry({name})
      .then(result => {
        setCountry(result)
              }
      )}, []) 
      return(
        <div>
            {country != null ? 
            (<div><p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <p>Languages:</p>
        <p>{Object.values(country.languages).map((lg, index) => { return <li key = {index}>{lg}</li>})}</p>
        <img src = {country.flags.png}/>
        </div>) : (<div></div>)}
        </div>
       
    )
    
    

}

export default Country