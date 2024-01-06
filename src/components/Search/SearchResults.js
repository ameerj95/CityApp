import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import useData from "../../utilities/useData"
import CityWeather from "../CityData/CityWeather"
import useWeatherData from './hooks/useWeatherData';


export default function SearchResults(){

  const urlParams = new URLSearchParams(window.location.search);
  const searchedCity = urlParams.get('q');
  const addTwoNumbers = ()=>{
    return 1+2
  }

  const { data, isLoading, error } = useWeatherData(searchedCity)
  if(!data){
    return null
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data.cod === "404") return <div>Error Message : {data.message}</div>
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6}>
        <Card>
          <CardContent >
            <CityWeather cityWeather={data}/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

