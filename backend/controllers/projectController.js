const projectModel = require("../models/projectModel");
const cloudinary = require("../config/cloudinaryConfig");

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

// Function to add images to a project
const addImagesToProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const files = req.files; // Assuming you're using a middleware like `multer` for file uploads

        // Upload each image to Cloudinary and store the URL in the database
        for (const file of files) {
            const result = await cloudinary.uploader.upload(file.path);
            await projectModel.addImageToProject(projectId, result.url);
        }

        res.status(201).json({ message: "Images added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding images" });
    }
};

// Function to add texts to a project
const addTextsToProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const texts = req.body.texts;

        // Add each text to the database
        for (const text of texts) {
            await projectModel.addTextToProject(projectId, text);
        }

        res.status(201).json({ message: "Texts added successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error adding texts" });
    }
};

module.exports = {
    getAllProjects,
    getProjectById,
    uploadImage,
    addImagesToProject,
    addTextsToProject,
};
