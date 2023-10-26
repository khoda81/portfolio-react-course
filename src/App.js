import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";
import Login from "./components/Login";
import Note from "./components/Note";
import Quiz from "./components/Quiz";
import SearchBar from "./components/SearchBar";
import Todo from "./components/Todo";
import User from "./components/User";
import Weather from "./components/Weather";
import DigikalaClone from "./components/DigikalaClone";

import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function Error() {
    return "404 not found";
}

const listOfRoutes = [
    { to: "/user", text: "User", component: User },
    { to: "/chatbox", text: "ChatBox", component: ChatBox },
    { to: "/login", text: "Login", component: Login },
    { to: "/searchbar", text: "SearchBar", component: SearchBar },
    { to: "/todo", text: "Todo", component: Todo },
    { to: "/quiz", text: "Quiz", component: Quiz },
    { to: "/weather", text: "Weather", component: Weather },
    { to: "/note", text: "Note", component: Note },
    { to: "/digikala", text: "Digikala Clone", component: DigikalaClone },
];

function HomePage() {
    return (
        <ul>
            {listOfRoutes.map((route) => (
                <li key={route.to}>
                    <Link to={route.to}>{route.text}</Link>
                </li>
            ))}
        </ul>
    );
}

function App() {
    return (
        <Router>
            <ThemeProvider theme={darkTheme}>
                <HomePage />
                <Routes>
                    <Route path={"/"} element={""} />

                    {listOfRoutes.map((route) => (
                        <Route path={route.to} key={route.to} element={<route.component />} />
                    ))}

                    <Route path={"*"} element={<Error />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
    // return <SearchBar />;
    // return <Quiz />;
    // return <Note />;
    // return <Login />;
    // return <ChatBox />;
}

export default App;
