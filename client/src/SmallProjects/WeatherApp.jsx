import React, { useEffect, useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState();
  const [fetchedWeather, setFetchedWeather] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    } else {
      setFetchedWeather(null); // Clear fetched data if city is empty
    }
  }, [city]); // Fetch data whenever the city changes
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04249ab890f811635132c94fcf966998`
      );
      setFetchedWeather(response.data);
      console.log("response.data", response.data);
    } catch (error) {
      // Handle any errors during the request
      console.error("There was an error making the request:", error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    if (event.target.value === "") {
      setFetchedWeather(null);
    }
  };

  const handleStart = () => {
    fetchWeatherData();
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="bg-blue-100 px-28 py-16 flex justify-center items-center flex-col rounded-lg border-[2px]">
          <h1 className="text-2xl text-center font-semibold mb-4">
            Weather App
          </h1>
          <div className="gap-3 flex mt-5">
            <input
              type="text"
              placeholder="Enter City Name..."
              value={city}
              onChange={handleChange}
              className="py-3 px-7 align-center"
            />
            <button
              onClick={handleStart}
              className="hover:bg-green-300 bg-green-400 px-5 rounded-lg"
            >
              Find
            </button>
          </div>
          <h1 className="font-bold text-5xl text-center mt-4">{city}</h1>
          {fetchedWeather ? (
            <>
              <ul>
                {fetchedWeather.weather.map((item, index) => (
                  <li key={index} className="text-center mt-2">
                    <div className="text-xl font-semibold">{item.main}</div>
                    <div className="mt-2 text-lg">{item.description}</div>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                Temperature:{" "}
                <span className="font-bold text-xl">
                  {(fetchedWeather.main.temp - 273.15).toFixed(2)} °C
                </span>
              </div>
            </>
          ) : (
            <>{null}</>
          )}
        </div>
        <p className="text-slate-500">created by Aman Hussain Khan</p>
      </div>
    </div>
  );
}

export default WeatherApp;
