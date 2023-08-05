import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/results.css";

const Results = () => {
  const navigate = useNavigate();
  const weatherDataRaw = localStorage.getItem("weatherData");
  const weatherData = JSON.parse(weatherDataRaw);

  // Main data
  const countryCode = weatherData.sys.country;
  const cityName = weatherData.name;
  const description = weatherData.weather[0].description;
  const iconCode = weatherData.weather[0].icon;
  const temp = weatherData.main.temp;
  const feelsLike = weatherData.main.feels_like;
  const humidity = weatherData.main.humidity;
  const visibility = weatherData.visibility;
  const windSpeed = weatherData.wind.speed;
  const windDegree = weatherData.wind.deg;

  const back = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="headerContainer">
        <p className="resultHeader">
          Current weather in {cityName}, {countryCode}
        </p>
        <img
          src="../images/back.svg"
          alt="backIcon"
          className="backIcon"
          onClick={back}
        />
      </div>
      <div className="resultsContainer">
        <div className="imageContainer">
          <img
            src={`../images/weatherIcons/${iconCode}.png`}
            alt="weatherIcon"
            className="image"
          />
        </div>
        <div className="dataContainer">
          <p className="data">{description}</p>
          <p className="data">Temprature: {temp} C°</p>
          <p className="data">Feels Like: {feelsLike} C°</p>
          <p className="data">Humidity: {humidity}%</p>
          <p className="data">Visibility: {visibility} m.</p>
          <p className="data">
            Wind: {windSpeed} m/sec at {windDegree}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
