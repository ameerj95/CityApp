import React from 'react'
// import useFetchData from '../utilities/useFetchData';
import SearchBox from './Search/SearchBox'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Home() {
  // const { data : people , loading, error } = useFetchData('https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people');

  // if(loading){
  //   return <div>Loading...</div>
  // }
  // if(error){
  //   return <div>Error has occured : {error.message}</div>
  // }
  // if(!people) return null

  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <SearchBox/>
      </Container>
    </React.Fragment>

    </>
  )
}
