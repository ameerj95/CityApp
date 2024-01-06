import React, { useState } from 'react'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
export default function SearchLayout() {
  
  const [searchedCity,setSearchedCity] = useState("")

  const handleSearch = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('q');
    setSearchedCity(myParam)
  }

  return (
    <>
        <Card sx={{ maxWidth: 300, m:4}}>
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Search for a City!
          </Typography>
          <SearchBox/>
          <Divider light />
          <CardActions>
          <Button variant="contained" size="big" sx={{mt:2,mb:0}} onClick={handleSearch} color="primary">
            Search
          </Button>
        </CardActions>
        </CardContent>
      </Card>
        <SearchResults searchedCity={searchedCity}/>
    </>
  )
}
