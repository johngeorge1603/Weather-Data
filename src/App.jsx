import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import React, { useState } from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';


const api= {
  key: "61f4834fe83c568319dfa5deddec104d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

 const [search, setSearch] = useState("");
 const [weather, setWeather] = useState({});

 const searchPress= () => {
  fetch (`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
  .then (res => res.json())
  .then ((result) => {setWeather(result)});
 }

  return (
    <div className="App">

      <div className="header text-center mt-5 text-light mb-4">
        <h1 style={{fontSize:'60px'}}>SEARCH WEATHER</h1>
    
      </div>

      <div className="searchcnt bg-body-tertiary p-3">
        <div className='searchbox'>
        <MDBInput label='Search Area' id='form1' type='text' className='bg-white' onChange={(e) => setSearch(e.target.value)}/>
        <MDBBtn className=' ms-2' style={{width:'100px'}} color='primary' onClick={searchPress}>
        SEARCH 
      </MDBBtn>
        </div>
      </div>

      {weather && weather.name && (
      <div className="resultcont m-5 rounded-5 text-primary p-5" style={{backgroundColor:'rgb(225, 240, 218)'}}>
        <h1 className='text-start mb-4 text-danger' style={{fontSize:'50px'}}>{weather.name}, {weather.sys.country}</h1>

        <div className="row">
        <div className="col-2 bg-light border border-danger rounded-4 text-danger p-2 fs-5">
        <p className='m-0 text-dark'>Avg Temperature:</p>
        <p className='m-0 mb-3 fs-4'>{weather.main.temp}&deg;C</p>
        <p className='m-0 text-dark'>Min Temperature</p>
        <p className='m-0 mb-3 fs-4'>{weather.main.temp_min}&deg;C</p>
        <p className='m-0 text-dark'>Max Temperature</p>
        <p className='m-0 fs-4'>{weather.main.temp_max}&deg;C</p>
        </div>
        <div className="col"></div>
        <div className="col-2 bg-light border border-danger rounded-4 text-danger p-2 fs-5">
        <p className='m-0 text-dark'>Humidity:</p>
        <p className='m-0 mb-3 fs-4'>{weather.main.humidity}%</p>
        <p className='m-0 text-dark'>Pressure:</p>
        <p className='m-0 mb-3 fs-4'>{weather.main.pressure}HPa</p>
        <p className='m-0 text-dark'>Feels Like:</p>
        <p className='m-0 fs-4'>{weather.main.feels_like}&deg;C</p>
        </div>
        <div className="col"></div>
        <div className="col-2 bg-light border border-danger rounded-4 text-danger p-2 fs-5">
        <p className='m-0 text-dark'>Condition:</p>
        <p className='m-0 mb-3 fs-4'>{weather.weather[0].main}</p>
        <p className='m-0 text-dark'>Description:</p>
        <p className='m-0 mb-3 fs-4'>{weather.weather[0].description}</p>
        <p className='m-0 text-dark'>Visibility:</p>
        <p className='m-0 fs-4'>{weather.visibility}m</p>

        </div>
        <div className="col"></div>
        <div className="col-2 bg-light border border-danger rounded-4 text-danger p-2 fs-5">
        <p className='m-0 text-dark'>Wind Deg:</p>
        <p className='m-0 mb-3 fs-4'>{weather.wind.deg}&deg;</p>
        <p className='m-0 text-dark'>Wind Gust:</p>
        <p className='m-0 mb-3 fs-4'>{weather.wind.gust}m/s</p>
        <p className='m-0 text-dark'>Wind Speed:</p>
        <p className='m-0 mb-3 fs-4'>{weather.wind.speed}m/s</p>
        </div>
        </div>
      </div>
      )}

      
    </div>
  );
}

export default App;
