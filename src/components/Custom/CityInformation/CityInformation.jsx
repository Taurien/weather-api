import React from 'react'
//Router
import { useNavigate } from 'react-router-dom'
//Weather Icons
import Clear from '../../../assets/weather-icons/Clear.svg'
import Clouds from '../../../assets/weather-icons/Clouds.svg'
import Rain from '../../../assets/weather-icons/Rain.svg'
import Drizzle from '../../../assets/weather-icons/Drizzle.svg'
//Style
import './CityInformation.style.scss'


const CityInformation = ( props ) => {
    
    const {
        message,
        name,
        weather,
        temp,
        sys,
        wind } = props

    const navigate = useNavigate()
    const navToFollowers = () => {
        navigate({ pathname: `/weather/${name}` })
    }
    
    const weatherIcon = (el) => {
        if (el === 'Clouds') {
            return Clouds
        } else if (el === 'Rain') {
            return Rain
        } else if (el === 'Drizzle') {
            return Drizzle
        } else {
            return Clear
        }
    }
    
    return (
        <div className='cityinfocard flex flex-col self-center'>
            {
                wind ? (
                    <>
                    <p>{name} | {sys.country}</p>
                    <span className='inline-flex justify-between items-center'>
                        <p>{weather[0].main} | {weather[0].description}</p>
                        <img src={weatherIcon(weather[0].main)} alt={weather[0].main} />
                    </span>
                    <p>Temp: {Math.floor(temp.temp-273.15)}°C | Feels like: {Math.ceil(temp.feels_like-273.15)}°</p>
                    <p>Humidity: {temp.humidity}%</p>
                    <p>Wind: {wind.speed} km/h | {wind.deg} deg.</p>
                    </>
                ) : (
                    message === 'city not found'? (
                        <>
                            <p>{message}</p>
                        </>
                    ) : (
                        <>
                            <p>{name} | {sys.country}</p>
                            <span className='inline-flex justify-between'>
                                <p>{weather[0].main}</p>
                                <img src={weatherIcon(weather[0].main)} alt={weather[0].main} />
                            </span>
                            <p>Temp: {parseInt(temp.temp-273.15)}°C</p>
                            <button onClick={navToFollowers} >See more</button>
                        </>
                    )
                )
            }
        </div>
    )
}

export default CityInformation
