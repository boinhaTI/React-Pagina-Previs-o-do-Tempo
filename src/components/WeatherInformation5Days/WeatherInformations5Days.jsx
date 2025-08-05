import "./WeatherInformations5Days.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function WeatherInformations5Days({ weather5Days }) {
  if (!weather5Days || !weather5Days.list) {
    return <p>Carregando informações do clima...</p>;
  }

  let dailyForecast = {};
  console.log(weather5Days.list);

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }
  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  return (
    <div className="weather-container">
      <p className="title">Previsão para os próximos 5 dias:</p>
      <div className="weather-list">
        {next5DaysForecast.map((forecast) => (
          <div key={forecast.dt} className="day-forecast">
            <p className="date">{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
            <p>
              {capitalizeFirstLetter(new Date(forecast.dt * 1000).toLocaleDateString("pt-br", {weekday: "long",}))}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
            />
            <p>{capitalizeFirstLetter(forecast.weather[0].description)}</p>
            <p>
              {Math.round(forecast.main.temp_min)}°C min /{" "}
              {Math.round(forecast.main.temp_max)}°C máx
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInformations5Days;
