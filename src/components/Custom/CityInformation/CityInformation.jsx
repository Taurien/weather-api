import React, { useContext, useState } from 'react'
//Router
import { useNavigate } from 'react-router-dom'
//Style
import './CityInformation.style.scss'
import WeatherContext from '../../../context/WeatherContext'


const CityInformation = ({ currentWeather, forecast, airPollution, min = false, ...props }) => {
    
    const navigate = useNavigate()
    const { weather } = useContext(WeatherContext)
    // const { currentWeather, forecast, airPollution } = weather
    // console.log(currentWeather, forecast, airPollution, min, props)

    const [ celsius, setCelsius] = useState(false)
    
    const seeMoreNav = () => {
        navigate({ pathname: `/weather/${currentWeather.name}` })
    }

    const ForecastSection = () => (
        <div className='forecast w-full flex flex-row py-2  overflow-scroll'>
            {
                forecast?.list.map((elm, item) => {
                    const dt = new Date(elm.dt*1000)
                    const padStart = obj => String(obj).padStart(2, "0")
                    return (
                        <div key={item} className='forecast_item flex flex-col items-center px-1'>
                            <p className=' text-center'>{padStart(dt.getHours())}:{padStart(dt.getMinutes())}</p>
                            <div className='flex flex-col items-center'>
                                <p className='min-w-max  font-bold text-center capitalize'>{elm.weather[0].description}</p>
                                <img className=' w-14' src={`http://openweathermap.org/img/wn/${elm.weather[0].icon}@2x.png`} alt={elm.weather[0].main} />
                            </div>
                            <div className=''>
                                <p>{elm.main.temp_max}</p>
                                <hr />
                                <p>{elm.main.temp_min}</p>
                            </div>
                            <p className=''>Humidity:{elm.main.humidity}%</p>
                        </div>
                    )
                })
            }
        </div>
    )
    
    
    return (
        <div className='cityinfocard relative self-center desktop:min-w-min mobile:w-9/12 flex flex-col items-center rounded-lg p-3 mx-4 text-xs'>
            {
                currentWeather.message?
                <>
                    <p>{currentWeather.message}</p>
                </> 
                : 
                <>
                    <div className='self-end inline-flex items-center font-bold text-sm'>
                        <p>{currentWeather.name} | {currentWeather.sys.country}</p>
                        <img className='h-4 ml-1' src={`https://countryflagsapi.com/svg/${currentWeather.sys.country}`} alt={`${currentWeather.sys.country} flag`} />
                    </div>
                    
                    <div className='h-20 w-64 inline-flex items-center justify-evenly overflow-hidden mb-2'>
                        <div className='relative w-24 h-24 flex flex-col justify-center'>
                            <p className='text-5xl text-center'>{parseInt(currentWeather.main.temp-273.15)}°</p>
                            <p className='w-full absolute bottom-2 left-1/2 transform-center text-center '>Feels like <b>{currentWeather.main.feels_like}°</b></p>
                        </div>
                        <div className=' relative w-24 h-24 flex flex-col justify-center'>
                            <img className='' src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt={currentWeather.weather[0].main} />
                            <p className='w-full absolute bottom-2 left-1/2 transform-center text-center  font-bold capitalize'>{currentWeather.weather[0].description}</p>
                        </div>
                    </div>
                    
                    <p className=''>Humidity: {currentWeather.main.humidity}%</p>
                    <p className=' mb-2'>{currentWeather.main.temp_max}°/{currentWeather.main.temp_min}°</p>
                </>
            }

            {/* {
                !currentWeather.message && 
                    <div className='absolute top-0 left-0'>
                        <button>F</button>
                        <button>C</button>
                    </div>
            } */}

            {
                !currentWeather.message && !min &&
                <>
                    <div className='inline-flex'>
                        <p>{currentWeather.wind.speed} km/h</p>
                        <p>{currentWeather.wind.deg}°</p>
                    </div>
                    <ForecastSection />
                </>
            }

            {
                !currentWeather.message && min &&
                <button className=' border border-solid border-yellow-300 px-2 py-1 text-base' onClick={seeMoreNav} >See more</button> 
            }
        </div>
    )
}

export default CityInformation
