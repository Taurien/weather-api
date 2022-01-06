import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { WeatherContextProvider } from "./context/WeatherContext";
//Views
import Home from './views/Home/Home';
import WeatherInformation from './views/WeatherInformation/WeatherInformation';
//Style
import Div100vh from 'react-div-100vh';
import './styles/App.style.scss';

function App() {

  const hours = new Date().getHours();

  return (
    <Div100vh 
      className={
        `flex flex-col
        ${
          hours >= 16 && hours <= 18 ? 'sunsetBg' :
          hours >= 6 && hours <= 15 ? 'dayBg' :
          'nightBg'
        }`
      }>
      <WeatherContextProvider>
        <Routes>
            <Route exact path='/search-weather-api' element={<Home />} />
            <Route path='/weather/:name' element={<WeatherInformation />} />
        </Routes>
      </WeatherContextProvider>
    </Div100vh>
  )
}

export default App;
