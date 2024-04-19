import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from the backend API
        fetch("/api/projects")
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map(project => (
                    <Link
                        to={`/projects/${project.id}`}
                        key={project.id}
                        className="block"
                    >
                        <div className="bg-white shadow-md rounded-md overflow-hidden">
                            {/* Random project image */}
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            {/* Project content */}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
