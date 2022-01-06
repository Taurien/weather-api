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
                <CityInformation
                    name={weather.name}
                    weather={weather.weather}
                    temp={weather.main}
                    sys={weather.sys}
                    wind={weather.wind}
                />
                <button className='self-center absolute'
                onClick={() => navigate(-1)}>Go back</button>
                </> 
                ) : <Loader />
            }
            
        </div>
    )
}

export default WeatherInformation
