import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CircleLoader from "react-spinners/CircleLoader";
import Spinner from './Spinner'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=94433d445865cd34ea1605c8bc3d6d0b`;
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  
  return (
    <div className="app">
      <input type="file" className="upload"></input>

      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
          
      </div>
      {loading ? 
       <Spinner/>
      :
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.pressure} hPa</p> : null}
              <p>Pressure</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} m/s</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
}
    </div>
  );
}

export default App;
