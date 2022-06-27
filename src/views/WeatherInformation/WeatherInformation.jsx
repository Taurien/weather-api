import React, { /*useState, useEffect,*/ useContext } from 'react'
import { useNavigate/*, useParams, useLocation, */ } from 'react-router'

import WeatherContext from '../../context/WeatherContext';

//Components
import Loader from '../../components/Custom/Loader/Loader';
import CityInformation from '../../components/Custom/CityInformation/CityInformation'


const WeatherInformation = () => {
    
    const { weather } = useContext(WeatherContext) 
    //console.log(weather)
    
    const navigate = useNavigate()
    //const { name } = useParams()
    
    return (
        <div className='weatherview h-4/5 flex flex-col'>
            {
                weather ? (
                <>
                    <CityInformation currentWeather={weather.currentWeather} forecast={weather.forecast} airPollution={weather.airPollution} />
                    <button className='self-center mt-4 px-2 py-1 text-base rounded-lg bg-gray-200' onClick={() => navigate(-1)}>Go back</button>
                </> 
                ) : <Loader />
            }
        </div>
    )
}

export default WeatherInformation
