import React from 'react'
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function SearchBox() {
  return (
    <Card sx={{ maxWidth: 1/8, m:4}}>
      <CardContent>
        <Typography variant="h6" color="text.primary" gutterBottom>
          Search for a City!
        </Typography>
        <TextField  id="outlined-basic" label="City Name" variant="outlined" />
        <CardActions>
        <Button size="big" sx={{mt:2,mb:0}} color="primary">
          Search
        </Button>
      </CardActions>
      </CardContent>
    </Card>
);
}
