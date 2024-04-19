import React, { useState } from "react";
import api from "../components/axiosInstance";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();
        try {
            const response = await api.post("/api/auth/login", {
                username,
                password,
            });
            // Save the token or user information and navigate to admin panel
            localStorage.setItem("token", response.data.token);
            navigate("/admin");
        } catch (error) {
            setError("Login failed. Please try again.");
        }
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4">Login</Typography>
            <form onSubmit={handleLogin}>
                <Box my={2}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Box>
                <Box my={2}>
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Box>
                {error && <Alert severity="error">{error}</Alert>}
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                >
                    Login
                </Button>
            </form>
        </Box>
    );
}

export default LoginPage;
