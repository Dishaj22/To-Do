function WeatherCard ({WeatherData}){
    return(
        <div>
            <h2>{WeatherCard.name}</h2>
            <p>Teamperature: {WeatherData.main.temp}°C</p>
            <p>Humidity: {WeatherData.main.humidity}%</p>
            <p>Conditions: {WeatherData.weather[0].description}</p>

        </div>
    )
}
export default WeatherCard