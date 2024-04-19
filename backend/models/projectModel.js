const db = require("../config/dbConfig");

const getProjects = callback => {
    const query = "SELECT * FROM projects";
    db.query(query, callback);
};

const getProjectById = (id, callback) => {
    const query = "SELECT * FROM projects WHERE id = ?";
    db.query(query, [id], callback);
};

const addImageToProject = (project_id, image_url, callback) => {
    const query = "INSERT INTO images (project_id, image_url) VALUES (?, ?)";
    db.query(query, [project_id, image_url], callback);
};

const addTextToProject = (project_id, text_content, callback) => {
    const query = "INSERT INTO texts (project_id, text_content) VALUES (?, ?)";
    db.query(query, [project_id, text_content], callback);
};

module.exports = {
    getProjects,
    getProjectById,
    addImageToProject,
    addTextToProject,
};
