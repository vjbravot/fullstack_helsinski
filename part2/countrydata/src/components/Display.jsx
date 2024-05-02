import Country from './Country'
import Weather from './Weather'
import {useCallback} from 'react'


function Display({countries,filter,capitals}){

    const handleClick = useCallback(event =>{
        {filter(event.target.value)}
    }, [filter])
    
    if(countries.length == 0){
        return(
            <div></div>
        )
    }

    else if(countries.length == 1){
      return(
        <div>
            <Country name = {countries[0]}/>
            <Weather cityName = {capitals[0][0]}/>
        </div>
      )}
    else if(countries.length > 10){
      return(
        <div>"Too many countries to display"</div>
      )
    }
    else{
      return(
         <ul>
        {countries.map((nl,id) => <div><li key = {id}>{nl}</li> <button onClick = {handleClick} value = {nl}>show</button></div>)
        }
        </ul>
      )
    }
    }

export default Display