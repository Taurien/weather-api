import React from "react";
import { Routes, Route } from "react-router-dom";
import { WeatherContextProvider } from "./context/WeatherContext";
//Views
import Home from './views/Home/Home';
import WeatherInformation from './views/WeatherInformation/WeatherInformation';
//Style
import Div100vh from 'react-div-100vh';
import './styles/App.style.scss';

function App() {

  const hours = new Date().getHours();

  const background = hours >= 16 && hours <= 18 ? 'sunsetBg' : hours >= 6 && hours <= 15 ? 'dayBg' : 'nightBg'

  return (
    <main className={`h-screen flex flex-col justify-center ${background}`}>
      <WeatherContextProvider>
        <Routes>
            <Route exact path='/weather-api' element={<Home />} />
            <Route path='/weather/:name' element={<WeatherInformation />} />
        </Routes>
      </WeatherContextProvider>
    </main>
  )
}

export default App;
