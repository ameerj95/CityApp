import { Typography } from '@mui/material'
import React from 'react'
import WeatherIcon from '../Weather/WeatherIcon'

export default function CityWeather({cityWeather}) {

    const {weather, main, clouds } = cityWeather
    const weatherDesc = weather[0].description
    return (
        <>
            <Typography>
                The weather is currently : {weatherDesc}
            </Typography>
            <Typography>
                It is : {main.temp}° Celsius
            </Typography>
            <WeatherIcon condition={weatherDesc} />
        </>

    )
}
