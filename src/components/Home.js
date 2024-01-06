import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SearchLayout from './Search/SearchLayout';

export default function Home() {


  return (
    <>
      <CssBaseline />
      <Container maxWidth="false">
        <SearchLayout/>
      </Container>
    </>
  )
}
