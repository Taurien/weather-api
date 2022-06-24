import React from 'react'

import '../Form/WeatherForm.style.scss'

const WeatherForm = ({ handleCity, handleFetch }) => {
    return (
        <form action=''
        className='self-center absolute overflow-hidden rounded-full'
        onSubmit={e => handleFetch(e)}>
            <input
                type="text"
                placeholder='City Name'
                onChange={({ target }) => handleCity(target)}
                className='w-8/12 px-4 py-1'
            />
            <input
                type="submit"
                value='Search'
                className='w-4/12 px-4 py-1'
            />
        </form>
    )
}

export default WeatherForm
