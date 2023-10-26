import React from "react";
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
];

function HomePage() {
    return (
        <ul>
            {listOfRoutes.map((route) => (
                <li>
                    <Link to={route.to}>{route.text}</Link>
                </li>
            ))}
        </ul>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<HomePage />} />

                {listOfRoutes.map((route) => (
                    <Route path={route.to} key={route.to} element={<route.component />} />
                ))}

                <Route path={"*"} element={<Error />} />
            </Routes>
        </Router>
    );
    // return <SearchBar />;
    // return <Quiz />;
    // return <Note />;
    // return <Login />;
    // return <ChatBox />;
}

export default App;
