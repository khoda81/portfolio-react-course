import React, { useState } from "react";
import LoginPage from "./digikala-clone/LoginPage";
import Products from "./digikala-clone/Products";
import { Button } from "@mui/material";

export default function DigikalaClone() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    return loggedIn ? (
        <>
            <Products />
            <ul>
                {users.map((user) => (
                    <li key={user.username}>
                        {user.username} {user.password}
                    </li>
                ))}
            </ul>
            <Button variant="contained" onClick={(e) => setLoggedIn(false)}>
                Logout
            </Button>
        </>
    ) : (
        <LoginPage
            onLogin={(username, pass, signup) => {
                if (signup) {
                    setUsers([...users, { username: username, password: pass }]);
                    setLoggedIn(true);
                } else {
                    users.forEach((user) => {
                        if (user.username === username && user.password === pass) {
                            setLoggedIn(true);
                        }
                    });
                }
            }}
        />
    );
}
