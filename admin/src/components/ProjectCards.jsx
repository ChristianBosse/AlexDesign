import React, { useEffect, useState } from "react";
import { Card, CardContent, Button, Typography, Grid } from "@mui/material";
import api from "../components/axiosInstance";

function ProjectCards({ onProjectRemove }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from API
        const fetchProjects = async () => {
            try {
                const response = await api.get("/api/projects");
                setProjects(response.data);
                console.log("Fetched projects:", response.data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };

        fetchProjects();
    }, []);

    const handleRemoveProject = async projectId => {
        try {
            await api.delete(`/api/projects/${projectId}`);
            // Remove project from state
            setProjects(projects.filter(project => project.id !== projectId));
            // Call callback function to handle the removal
            onProjectRemove();
        } catch (error) {
            console.error("Failed to remove project:", error);
        }
    };

    return (
        <Grid container spacing={2}>
            {projects.map(project => (
                <Grid item key={project.project_id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">
                                {project.project_name}
                            </Typography>
                            {
                                // Split the image URLs into an array and show first image
                                project.project_images.split(",")[0] && (
                                    <img
                                        src={
                                            project.project_images.split(",")[0]
                                        }
                                        alt={project.project_name}
                                        style={{ width: "100%" }}
                                    />
                                )
                            }
                            <Typography variant="body2">
                                {project.project_texts}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                    handleRemoveProject(project.project_id)
                                }
                            >
                                Remove
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProjectCards;
