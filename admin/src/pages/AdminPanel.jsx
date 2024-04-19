import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import AdminHeader from "../components/AdminHeader";
import ProjectCards from "../components/ProjectCards";
import AddProjectModal from "../components/AddProjectModal";

function AdminPanel() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Change this based on your authentication logic

    const handleLogout = () => {
        // Implement your logout logic here
        setIsLoggedIn(false);
    };

    const handleProjectAdded = () => {
        // Refresh projects list or handle other logic after a new project is added
    };

    return (
        <Container>
            <AdminHeader isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Typography variant="h4" gutterBottom>
                Admin Panel
            </Typography>
            <AddProjectModal onProjectAdded={handleProjectAdded} />
            <ProjectCards onProjectRemove={handleProjectAdded} />
        </Container>
    );
}

export default AdminPanel;
