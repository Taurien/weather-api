import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'

const WeatherContext = createContext()

const WeatherContextProvider = ({ children }) => {

    const [ dataFromIP, setDataFromIP ] = useState(null)
    const [ weather, setWeather] = useState(null)
    const [ gpsError, setGpsError] = useState(false)

    const handleWeather = (el) => setWeather(el)

    const fetchAndSetWeather = async (lat, lon) => {
        const latitude = +lat.toFixed(2)
        const longitude = +lon.toFixed(2)
        
        const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`)

        setWeather({
            currentWeather: currentWeather.data,
        })
    }

    const weatherOnIp = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        const { IPv4 } = res.data

        const { data } = await axios.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_IPSTACK_KEY}&ip_address=${IPv4}`)
        
        // console.log(data)
        const {
            city,
            continent,
            continent_code,
            country,
            country_code,
            flag,
            latitude,
            longitude,
            region,
            timezone} = data

        setDataFromIP({
            city,
            continent,
            continent_code,
            country,
            country_code,
            flag,
            latitude,
            longitude,
            region,
            timezone
        })

        fetchAndSetWeather(latitude, longitude)
    }

    useEffect(() => {
        weatherOnIp()
    },[])

    // 

    const extraData = async (currentWeather) => {
        const {lon, lat} = currentWeather.coord
        
        // const currentDate = new Date()
        // const toTimestamp = (date) => Math.floor(date.getTime()/1000)

        // const daysBefore = currentDate.setDate(currentDate.getDate() - 2)
        // const daysAfter = currentDate.setDate(currentDate.getDate() + 2)
        
        // const start = toTimestamp(new Date(daysBefore))
        // const start = toTimestamp(currentDate)
        // const end = toTimestamp(new Date(daysAfter))

        const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${9}&appid=${process.env.REACT_APP_API_KEY}`)
        // const airPollution = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&start=${start}&end=${end}&appid=${process.env.REACT_APP_API_KEY}`)
        const airPollution = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)

        setWeather({
            ...weather,
            forecast: forecast.data,
            airPollution: airPollution.data
        })
    }

    useEffect(() => {
        if (!weather?.currentWeather.message && weather?.currentWeather !== undefined) extraData(weather.currentWeather)
    },[weather?.currentWeather])

    
    const locationByGps = (e) => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        const success = (pos) => {
            // console.log(pos)
            const coords = pos.coords;
            setGpsError(false)

            console.log('Your current position is:');
            console.log(`Latitude : ${coords.latitude}`);
            console.log(`Longitude: ${coords.longitude}`);
            // console.log(`More or less ${coords.accuracy} meters.`);
            fetchAndSetWeather(coords.latitude, coords.longitude)
        }

        const error = (err) => {
            console.log(err)
            console.warn(`ERROR(${err.code}): ${err.message}`);
            setGpsError(true)
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }

        
    const data = {
        dataFromIP,
        weather,
        handleWeather,
        locationByGps,
        gpsError
    }
    
    return (
        <WeatherContext.Provider value={ data }>
            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherContextProvider }
export default WeatherContext
