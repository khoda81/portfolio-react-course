// import { useLocation } from "react-router-dom";

import styled from "@emotion/styled";
import { Button, Card, Container, TextField, useTheme } from "@mui/material";
import { useState } from "react";

const LoginPageContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: theme.palette.background.paper,
}));

const LoginPage = (props) => {
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const initialCity = queryParams.get("q");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginPageContainer>
            <Card elevation={4} sx={{ p: 4 }}>
                <TextField label="Username" sx={{ mb: 2 }} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <TextField
                    label="Password"
                    type="password"
                    sx={{ mb: 4 }}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <div style={{ display: "flex", width: "100%" }}>
                    <Button
                        variant="contained"
                        style={{ flex: "1" }}
                        sx={{ mr: 2 }}
                        onClick={() => props.onLogin(username, password, false)}
                    >
                        Login
                    </Button>
                    <Button
                        variant="outlined"
                        style={{ flex: "1" }}
                        onClick={() => props.onLogin(username, password, true)}
                    >
                        Sign Up
                    </Button>
                </div>
            </Card>
        </LoginPageContainer>
    );
};

export default LoginPage;
