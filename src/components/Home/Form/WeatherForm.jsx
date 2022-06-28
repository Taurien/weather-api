import React from 'react'

import magnifying from '../../../assets/magnifying-glass.svg'

const WeatherForm = ({ handleCity, handleFetch }) => {
    return (
        <form action=''
        className='overflow-hidden rounded-full w-8/12  desktop:w-2/5 box-shdw'
        onSubmit={e => handleFetch(e)}>
            <input
                type="text"
                placeholder='City Name'
                onChange={({ target }) => handleCity(target)}
                className='w-8/12 px-4 py-1 outline-none'
            />
            <div className='inline-flex items-center justify-center w-4/12 px-4 py-1 outline-none bg-gray-200'>
                <input type="submit" value='Search' className='outline-none mr-1'/>
                <img className='w-4' src={magnifying} alt="" />
            </div>
        </form>
    )
}

export default WeatherForm
