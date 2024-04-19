const projectModel = require("../models/projectModel");
const cloudinary = require("../config/cloudinaryConfig");
const fs = require("fs");

const getAllProjects = (req, res) => {
    projectModel.getProjects((err, results) => {
        if (err) {
            return res.status(500).json({ error: "Error retrieving projects" });
        }
        res.json(results);
    });
};

const getProjectById = (req, res) => {
    const { id } = req.params;
    projectModel.getProjectById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error retrieving project" });
        }
        res.json(result);
    });
};

const uploadImage = async file => {
    try {
        const result = await cloudinary.uploader.upload(file.path);
        return result.url; // URL of the uploaded image
    } catch (error) {
        throw new Error("Error uploading image");
    }
};

// Add project
const addProject = async (req, res) => {
    const { name, description } = req.body;

    console.log(name);

    // Ensure files were uploaded
    if (!req.files) {
        return res.status(400).json({ error: "No files uploaded" });
    }

    // Array to store Cloudinary image URLs
    const imageUrls = [];

    try {
        // Upload each file to Cloudinary
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path);
            imageUrls.push(result.secure_url);
        }
        // Once uploaded to Cloudinary, remove temporary files
        req.files.forEach(file => {
            fs.unlinkSync(file.path);
        });
        // Add project to the database
        projectModel.addProject(name, description, imageUrls, (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Error adding project" });
            }
            res.json({ message: "Project added successfully" });
        });
    } catch (error) {
        console.error("Error uploading files or adding project:", error);
        res.status(500).json({ error: "Error adding project" });
    }
};

const deleteProject = (req, res) => {
    const { id } = req.params;
    projectModel.deleteProject(id, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error deleting project" });
        }
        res.json(result);
    });
};

module.exports = {
    getAllProjects,
    getProjectById,
    uploadImage,
    addProject,
    deleteProject,
};
