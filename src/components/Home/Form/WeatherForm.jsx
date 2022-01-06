import React from 'react'

import '../Form/WeatherForm.style.scss'

const WeatherForm = ({ handleCity, handleFetchData }) => {
    return (
        <form action=''
        className='self-center grid'
        onSubmit={e => handleFetchData(e)}>
            <input
                type="text"
                placeholder='City Name'
                onChange={({ target }) => handleCity(target)}
            />
            <input
                type="submit"
                value='¡¡Search!!'
            />
        </form>
    )
}

export default WeatherForm
