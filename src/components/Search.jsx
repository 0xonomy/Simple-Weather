import React, { useState } from "react";
import "../styles/search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState();
  const apiKey = "f3f79b864b0c4957c6f6eb1b595af2b1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

  const fetchData = async (e) => {
    e.preventDefault();
    const response = await fetch(url);
    const weatherData = await response.json();
    if (weatherData.cod === 200) {
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
      navigate("/results");
    } else {
      setMessage(weatherData.message);
    }
  };

  return (
    <div className="searchContainer">
      <form className="searchForm" onSubmit={fetchData}>
        <div className="centerContainer">
          <img src="../images/logo.webp" alt="logo" className="logo" />
          <input
            className="searchInput"
            type="text"
            placeholder="Search:"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {message && <p className="message">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default Search;
