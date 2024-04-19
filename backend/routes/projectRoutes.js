const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");
const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
});

const upload = multer({ storage: storage });

router.get("/projects", projectController.getAllProjects);
router.delete("/projects/:id", authMiddleware, projectController.deleteProject);
router.get("/projects/:id", projectController.getProjectById);
router.post(
    "/projects/add",
    authMiddleware,
    upload.array("images"),
    projectController.addProject
);

module.exports = router;
