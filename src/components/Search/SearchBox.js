import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

export default function SearchBox() {
  const queryParameters = new URLSearchParams(window.location.search)

  const handleChange = (event) => {
    queryParameters.set("searchedCity",event.target.value)
    window.history.replaceState( {} , "title", `?q=${event.target.value}` );
  }


  return (
    <TextField sx={{mb:2}} onChange={handleChange} id="outlined-basic" label="City Name" variant="outlined" />

);
}
