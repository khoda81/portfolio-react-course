import React from "react";
import { Typography, Box } from "@mui/material";
import { WbSunny, Opacity, Cloud, Grain, AcUnit } from "@mui/icons-material";

const WeatherData = ({ name, country, description, temperature, humidity, windSpeed }) => {
    const iconSize = 36;

    const getWeatherIcon = (weatherDescription) => {
        switch (weatherDescription.toLowerCase()) {
            case "clear":
                return <WbSunny fontSize="large" style={{ color: "#FFD700", fontSize: iconSize }} />;
            case "light rain":
                return <Opacity fontSize="large" style={{ color: "#0087B5", fontSize: iconSize }} />;
            case "broken clouds":
                return <Cloud fontSize="large" style={{ color: "#A9A9A9", fontSize: iconSize }} />;
            case "snow":
                return <Grain fontSize="large" style={{ fontSize: iconSize }} />;
            default:
            //     return <AcUnit fontSize="large" style={{ color: "#A9A9A9", fontSize: iconSize }} />;
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            {getWeatherIcon(description)}
            <Typography variant="h6" sx={{ color: "#333", marginTop: 2 }}>
                {name}, {country}
            </Typography>
            <Typography sx={{ color: "#666" }}>{description}</Typography>
            <Typography sx={{ color: "#333" }}>Temperature: {temperature}°C</Typography>
            <Typography sx={{ color: "#333" }}>Humidity: {humidity}%</Typography>
            <Typography sx={{ color: "#333" }}>Wind Speed: {windSpeed} m/s</Typography>
        </Box>
    );
};

export default WeatherData;
