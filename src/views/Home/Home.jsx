import React, { useContext, useState, useEffect } from 'react';
import WeatherContext from '../../context/WeatherContext';
//Custom hooks
import { useFetch } from '../../hooks/useFetch';
//Components
import WeatherForm from '../../components/Home/Form/WeatherForm';
import CityInformation from '../../components/Custom/CityInformation/CityInformation';
import Loader from '../../components/Custom/Loader/Loader';

const Home = () => {

  const [ ciytName, setCiytName ] = useState('')

  const { dataFromIP, weather, handleWeather, locationByGps, gpsError } = useContext(WeatherContext) 
  // console.log(weather)
  
  //Functions
  const handleCity = ( {value} ) => {
    setCiytName(value)
  }

  const { response, loader, handleFetch } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciytName}&appid=${process.env.REACT_APP_API_KEY}`)

  

  useEffect(() => {
    const dataToContext = () => handleWeather({currentWeather: response})

    if (response !== null) dataToContext()
  }, [response])


  return (
    <div className="homeview h-full flex flex-col justify-center">
      {
        gpsError && <div>gps error</div>
      }

      <WeatherForm
        handleCity={handleCity}
        handleFetch={handleFetch}
      />

      {
        (!dataFromIP || loader) && <Loader /> 
      }

      {
        dataFromIP && weather && <CityInformation  currentWeather={weather.currentWeather} forecast={weather.forecast} airPollution={weather.airPollution} min={true} />
      }

      <button className=' self-center border border-solid border-yellow-300 px-2 py-1 ' onClick={() => locationByGps()}>Use GPS</button>
      
    </div>      
  )
}

export default Home