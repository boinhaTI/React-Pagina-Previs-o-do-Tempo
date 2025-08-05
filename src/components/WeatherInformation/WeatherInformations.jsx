import './WeatherInformations.css'

function WeatherInformations({ weather }) {
  if (!weather || !weather.weather || !weather.weather[0]) {
    return <p>Carregando informações do clima...</p>;
  }

  const iconCode = weather.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
  console.log(weather);
  return (
    <div className='weather-container'>
      <h2>{weather.name}</h2>
      <p className="date">{new Date(weather.dt * 1000).toLocaleDateString()}</p>
      <div className='weather-info'>
        <img src={iconUrl} alt="Weather icon" />
        <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className='description'>{weather.weather[0].description}</p>
      <div className='details'>
        <p>Sensação térmica: {weather.main.feels_like}°C</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure} hPa</p>
      </div>
    </div>
  );
}

export default WeatherInformations;
