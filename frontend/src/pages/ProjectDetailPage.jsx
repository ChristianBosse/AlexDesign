import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectDetailPage() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Fetch project details from the backend API
        fetch(`/api/projects/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
            .catch(error => console.error("Error fetching project:", error));
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
            {/* Display project images */}
            <div className="mb-4">
                {project.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={project.title}
                        className="w-full h-auto mb-4 object-cover"
                    />
                ))}
            </div>
            {/* Display project text */}
            <div>
                {project.texts.map((text, index) => (
                    <p key={index} className="text-gray-600 mb-4">
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default ProjectDetailPage;
