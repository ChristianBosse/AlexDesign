import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./theme";
import { CssBaseline } from "@mui/material";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPanel from "./pages/AdminPanel";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/admin"
                    element={<PrivateRoute element={AdminPanel} />}
                />
                {/* Add more routes here as needed */}
            </Routes>
        </ThemeProvider>
    );
}

export default App;
