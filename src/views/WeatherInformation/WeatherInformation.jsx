import React, { /*useState, useEffect,*/ useContext } from 'react'
import { useNavigate/*, useParams, useLocation, */ } from 'react-router'

import WeatherContext from '../../context/WeatherContext';

//Components
import Loader from '../../components/Custom/Loader/Loader';
import CityInformation from '../../components/Custom/CityInformation/CityInformation'

import '../WeatherInformation/WeatherInformation.style.scss'

const WeatherInformation = () => {
    
    const { weather } = useContext(WeatherContext) 
    //console.log(weather)
    
    const navigate = useNavigate()
    //const { name } = useParams()
    
    return (
        <div className='weatherview h-full flex flex-col justify-center'>
            {
                weather ? (
                <>
                    <CityInformation currentWeather={weather.currentWeather} forecast={weather.forecast} airPollution={weather.airPollution} />
                    <button className='self-center absolute  border border-solid border-yellow-300 px-2 py-1 text-base' onClick={() => navigate(-1)}>Go back</button>
                </> 
                ) : <Loader />
            }
        </div>
    )
}

export default WeatherInformation
