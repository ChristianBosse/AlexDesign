const db = require("../config/dbConfig");

const getProjects = callback => {
    // Join the projects, texts, and images tables to fetch all related data
    const query = `
    SELECT
        p.project_id AS project_id,
        p.name AS project_name,
        GROUP_CONCAT(DISTINCT t.text_content ORDER BY t.id SEPARATOR ' ') AS project_texts,
        GROUP_CONCAT(DISTINCT i.image_url ORDER BY i.id SEPARATOR ',') AS project_images
    FROM
        projects p
    LEFT JOIN
        texts t ON p.project_id = t.project_id
    LEFT JOIN
        images i ON p.project_id = i.project_id
    GROUP BY
        p.project_id, p.name
    ORDER BY
        p.project_id
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error("Failed to fetch projects:", err);
            callback(err);
            return;
        }

        // Process results and pass them to the callback function
        callback(null, results);
    });
};

const getProjectById = (id, callback) => {
    const query = `
        SELECT
            p.project_id AS project_id,
            p.name AS project_name,
            GROUP_CONCAT(DISTINCT t.text_content ORDER BY t.id SEPARATOR ' ') AS project_texts,
            GROUP_CONCAT(DISTINCT i.image_url ORDER BY i.id SEPARATOR ',') AS project_images
        FROM
            projects p
        LEFT JOIN
            texts t ON p.project_id = t.project_id
        LEFT JOIN
            images i ON p.project_id = i.project_id
        WHERE
            p.project_id = ?
        GROUP BY
            p.project_id, p.name
        ORDER BY
            p.project_id
    `;

    // Execute the query with the provided project ID
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error("Failed to fetch project by ID:", err);
            callback(err, null);
        } else {
            // Return the results to the callback
            callback(null, results[0]); // Return the first (and only) result
        }
    });
};

const addProject = (name, texts, images, callback) => {
    // Destructure the project data

    console.log("Type of callback:", typeof callback);
    console.log(name);

    // Start a transaction to ensure data consistency across tables
    db.beginTransaction(err => {
        if (err) {
            console.error("Failed to start transaction:", err);
            return callback(err);
        }

        // Insert the new project into the projects table
        const projectQuery = "INSERT INTO projects (name) VALUES (?)";
        db.query(projectQuery, [name], (err, result) => {
            if (err) {
                return db.rollback(() => {
                    console.error("Failed to insert project:", err);
                    callback(err);
                });
            }

            // Get the inserted project's ID
            const projectId = result.insertId;

            // Insert text content into the texts table
            const textQuery =
                "INSERT INTO texts (project_id, text_content) VALUES (?, ?)";

            db.query(textQuery, [projectId, texts], err => {
                if (err) {
                    return db.rollback(() => {
                        console.error("Failed to insert text:", err);
                        callback(err);
                    });
                }
            });

            // Insert images into the images table
            const imageQuery =
                "INSERT INTO images (project_id, image_url) VALUES (?, ?)";
            images.forEach(image => {
                db.query(imageQuery, [projectId, image], err => {
                    if (err) {
                        return db.rollback(() => {
                            console.error("Failed to insert image:", err);
                            callback(err);
                        });
                    }
                });
            });

            // If everything is successful, commit the transaction
            db.commit(err => {
                if (err) {
                    return db.rollback(() => {
                        console.error("Failed to commit transaction:", err);
                        callback(err);
                    });
                }
                callback(null, { projectId });
            });
        });
    });
};

const deleteProject = (id, callback) => {
    // Start a transaction to ensure data consistency across tables
    db.beginTransaction(err => {
        if (err) {
            console.error("Failed to start transaction:", err);
            return callback(err);
        }

        // Delete the project from the projects table
        const projectQuery = "DELETE FROM projects WHERE project_id = ?";
        db.query(projectQuery, [id], (err, result) => {
            if (err) {
                return db.rollback(() => {
                    console.error("Failed to delete project:", err);
                    callback(err);
                });
            }

            // Delete text content from the texts table
            const textQuery = "DELETE FROM texts WHERE project_id = ?";
            db.query(textQuery, [id], err => {
                if (err) {
                    return db.rollback(() => {
                        console.error("Failed to delete text:", err);
                        callback(err);
                    });
                }
            });

            // Delete images from the images table
            const imageQuery = "DELETE FROM images WHERE project_id = ?";
            db.query(imageQuery, [id], err => {
                if (err) {
                    return db.rollback(() => {
                        console.error("Failed to delete image:", err);
                        callback(err);
                    });
                }
            });

            // If everything is successful, commit the transaction
            db.commit(err => {
                if (err) {
                    return db.rollback(() => {
                        console.error("Failed to commit transaction:", err);
                        callback(err);
                    });
                }
                callback(null, { message: "Project deleted successfully" });
            });
        });
    });
};

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    deleteProject,
};
