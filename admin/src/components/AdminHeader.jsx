import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AdminHeader({ isLoggedIn, onLogout }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        onLogout();
        navigate("/");
    };

    return (
        <div>
            {isLoggedIn ? (
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                >
                    Login
                </Button>
            )}
        </div>
    );
}

export default AdminHeader;
