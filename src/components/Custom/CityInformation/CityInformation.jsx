import React, { useContext, useState } from 'react'
//Router
import { useNavigate } from 'react-router-dom'

import WeatherContext from '../../../context/WeatherContext'

import speed from '../../../assets/speed.svg'
import arrow from '../../../assets/arrow.svg'


const CityInformation = ({ currentWeather, forecast, airPollution, min = false, ...props }) => {
    
    const navigate = useNavigate()
    const { weather } = useContext(WeatherContext)
    // const { currentWeather, forecast, airPollution } = weather
    // console.log(currentWeather, forecast, airPollution, min, props)

    const seeMoreNav = () => {
        navigate({ pathname: `/weather/${currentWeather.name}` })
    }

    const ForecastSection = () => (
        <div className='forecast w-full flex flex-row py-2 overflow-y-hidden overflow-x-visible rounded-md glass'>
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
                            <p className=''>Humidity:<b>{elm.main.humidity}%</b></p>
                            <div className='flex flex-col items-center overflow-hidden rounded-xl text-center'>
                                <p className='w-full p-2 bg-red-400 font-bold'>{elm.main.temp_max}°</p>
                                <p className='w-full p-2 bg-blue-400 font-bold'>{elm.main.temp_min}°</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
    
    
    return (
        <div className='relative self-center desktop:min-w-min mobile:w-9/12 flex flex-col items-center rounded-lg p-3 my-auto text-xs glass box-shdw'>
            {
                currentWeather.message?
                <>
                    <p className='capitalize'>{currentWeather.message}</p>
                </> 
                : 
                <>
                    <div className='self-end inline-flex items-center font-bold text-sm'>
                        <p>{currentWeather.name} | {currentWeather.sys.country}</p>
                        <img className='h-4 ml-1' src={`https://countryflagsapi.com/svg/${currentWeather.sys.country}`} alt={`${currentWeather.sys.country} flag`} />
                    </div>
                    
                    <div className='h-20 w-64 inline-flex items-center justify-evenly overflow-hidden mb-2'>
                        <div className='relative w-24 h-24 flex flex-col justify-center'>
                            <p className='text-5xl text-center'>{currentWeather.main.temp.toFixed()}°</p>
                            <p className='w-full absolute bottom-2 left-1/2 transform-center text-center '>Feels like <b>{currentWeather.main.feels_like}°</b></p>
                        </div>
                        <div className=' relative w-24 h-24 flex flex-col justify-center'>
                            <img className='' src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt={currentWeather.weather[0].main} />
                            <p className='w-full absolute bottom-2 left-1/2 transform-center text-center  font-bold capitalize'>{currentWeather.weather[0].description}</p>
                        </div>
                    </div>
                    
                    <p className='mb-2'>Humidity: <b>{currentWeather.main.humidity}%</b></p>

                    <div className='flex flex-col items-center overflow-hidden rounded-xl mb-2 text-center'>
                        <p className='w-full p-2 bg-red-400 font-bold'>{currentWeather.main.temp_max}°</p>
                        <p className='w-full p-2 bg-blue-400 font-bold'>{currentWeather.main.temp_min}°</p>
                    </div>
                </>
            }

            {/* {
                !currentWeather.message && 
                    <div className='absolute top-0 left-0'>
                        <button className='rounded-lg'>F</button>
                        <button className='rounded-lg'>C</button>
                    </div>
            } */}

            {
                !currentWeather.message && !min &&
                <>
                    <div className='inline-flex w-64 items-center justify-evenly mb-2 font-bold'>
                        <div className='inline-flex items-center'>
                            <p className='mr-2'>{(currentWeather.wind.speed*3.6).toFixed(1)} km/h</p>
                            <img className='w-8' src={speed} alt="" />
                        </div>
                        <div className='inline-flex items-center'>
                            <p className='mr-2'>{currentWeather.wind.deg}°</p>
                            <div className='w-7 h-7 flex items-center justify-center rounded-full border border-solid border-black'>
                                <img
                                    style={{transform: `rotate(${(-135+currentWeather.wind.deg)}deg)`, WebkitTransform: `rotate(${-135+currentWeather.wind.deg}deg)`}}
                                    className='w-4' src={arrow} alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <ForecastSection />
                </>
            }

            {
                !currentWeather.message && min &&
                <button className='px-2 py-1 text-base rounded-lg glass box-shdw' onClick={seeMoreNav} >See more</button> 
            }
        </div>
    )
}

export default CityInformation
