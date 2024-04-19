import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

function HomePage() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Typography variant="h3" sx={{ marginBottom: 3 }}>
                Welcome
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleLoginClick}
                sx={{ marginBottom: 2, width: "200px" }}
            >
                Login
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleRegisterClick}
                sx={{ width: "200px" }}
            >
                Register
            </Button>
        </Box>
    );
}

export default HomePage;
