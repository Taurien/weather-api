import React, { useContext, useState, useEffect } from 'react';
import WeatherContext from '../../context/WeatherContext';
//Custom hooks
import { useFetchData } from '../../hooks/useFetchData';
//Components
import WeatherForm from '../../components/Home/Form/WeatherForm';
import CityInformation from '../../components/Custom/CityInformation/CityInformation';
import Loader from '../../components/Custom/Loader/Loader';

const Home = () => {

  //States
  const [ ciytName, setCiytName ] = useState('')

  const { weather, handleWeather } = useContext(WeatherContext) 
  
  //Functions
  const handleCity = ( {value} ) => {
    setCiytName(value)
  }

  //Api call
  const { data, loader, handleFetchData } = useFetchData(`https://api.openweathermap.org/data/2.5/weather?q=${ciytName}&appid=${process.env.REACT_APP_API_KEY}`)
  

  useEffect(() => {
    
    const dataToContext = () => {
      handleWeather(data)
    }

    dataToContext()
  }, [data, handleWeather])


  return (
    <div className="homeview h-full flex flex-col justify-center">
      <WeatherForm
        handleCity={handleCity}
        handleFetchData={handleFetchData}
        />

      {
        loader && <Loader />
      }

      {
        weather && <CityInformation
        message={weather?.message}
        name={weather?.name}
        weather={weather?.weather}
        temp={weather?.main}
        sys={weather?.sys}
        />
      }
    </div>      
  )
}

export default Home