import { useState, useRef } from 'react'
import axios from 'axios'

import './App.css'
import WeatherInformations from './components/WeatherInformation/WeatherInformations'
import WeatherInformations5Days from './components/WeatherInformation5Days/WeatherInformations5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  async function searchCity()  {
    const city = inputRef.current.value
    const key = import.meta.env.VITE_API_KEY
    const lang = "pt_br"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}&units=metric`

    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=${lang}&units=metric`

    const apiData = await axios.get(url)
    const apiData5Days = await axios.get(url5Days)

    setWeather5Days(apiData5Days.data)
    setWeather(apiData.data)


  }

  return (
    <div className='container'>
      <h1>DevClub Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather}/>}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days}/>}
    </div>
  )
}

export default App
