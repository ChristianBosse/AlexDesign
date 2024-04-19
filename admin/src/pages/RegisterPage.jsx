import React, { useState } from "react";
import api from "../components/axiosInstance";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleRegister = async e => {
        e.preventDefault();
        try {
            const response = await api.post("/api/register", {
                username,
                password,
            });
            // Redirect to login page or perform other actions
        } catch (error) {
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4">Register</Typography>
            <form onSubmit={handleRegister}>
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
                    Register
                </Button>
            </form>
        </Box>
    );
}

export default RegisterPage;
