import React from 'react';
import { 
  WbSunny, // for sunny
  Cloud, // for cloudy
  Grain, // for windy
  AcUnit, // for snowy
} from '@mui/icons-material';

import HelpIcon from '@mui/icons-material/Help';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
const weatherIconMap = {
  "sunny": <WbSunny/>,
  "cloudy": <Cloud/>,
  "windy": <Grain/>,
  "snowy": <AcUnit/>,
  "overcast clouds": <Cloud/>,
  "scattered clouds" : <Cloud/>,
  "mist":<FilterDramaIcon/>

};

function WeatherIcon({ condition }) {
  const WeatherIcon = weatherIconMap[condition] || null;
  return WeatherIcon ? WeatherIcon : <HelpIcon/>
}

export default WeatherIcon;
