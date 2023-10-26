import React, { useState, useEffect, useCallback } from "react";
import { Container, Typography, TextField, Button, Paper, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import WeatherData from "./WeatherData";
import { useLocation } from "react-router-dom";

const WeatherAppContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
}));

const WeatherPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));

const Weather = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCity = queryParams.get("q");

    const [city, setCity] = useState(initialCity || "");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiKey = "abe4466e11002dc02bd6cb7556013749"; // Replace with your actual API key

    const fetchWeatherData = useCallback(async () => {
        setLoading(true);
        setWeatherData(null);

        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            .then((response) => response.json())
            .then(setWeatherData)
            .catch((e) => console.error("Error fetching weather data:", e))
            .finally(() => setLoading(false));
    }, [city, apiKey, setWeatherData]);

    useEffect(() => {
        if (city) {
            fetchWeatherData();
        }
    }, [city, fetchWeatherData]);

    return (
        <WeatherAppContainer maxWidth="sm">
            <WeatherPaper elevation={3}>
                <Typography variant="h5" sx={{ m: 1 }}>
                    Weather Dashboard
                </Typography>
                <TextField
                    label="Enter City or ZIP Code"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    sx={{ m: 1 }}
                />
                <Button variant="contained" color="primary" onClick={fetchWeatherData} sx={{ m: 1 }}>
                    Get Weather
                </Button>
                {loading && <CircularProgress sx={{ m: 2 }} />}
                {weatherData &&
                    (weatherData.cod === "404" ? (
                        <Typography variant="body1">City not found</Typography>
                    ) : (
                        <WeatherData
                            name={weatherData.name}
                            country={weatherData.sys.country}
                            description={weatherData.weather[0].description}
                            temperature={Math.round(weatherData.main.temp - 273.15)} // Convert to Celsius
                            humidity={weatherData.main.humidity}
                            windSpeed={weatherData.wind.speed}
                        />
                    ))}
            </WeatherPaper>
        </WeatherAppContainer>
    );
};

export default Weather;
