import React, { createContext, useState } from 'react'

//create
const WeatherContext = createContext()

//provider
const WeatherContextProvider = ({ children }) => {
    
    const [ weather, setWeather] = useState(null)

    const handleWeather = (el) => setWeather(el)

    const data = {
        weather,
        handleWeather,
    }
    
    return (
        <WeatherContext.Provider value={ data }>
        {children}
        </WeatherContext.Provider>
    )
}

export { WeatherContextProvider }
export default WeatherContext
