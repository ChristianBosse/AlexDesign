const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/projects", projectController.getAllProjects);
router.get("/projects/:id", projectController.getProjectById);
router.post(
    "/projects/:id/images",
    authMiddleware,
    projectController.addImagesToProject
);
router.post(
    "/projects/:id/texts",
    authMiddleware,
    projectController.addTextsToProject
);
module.exports = router;
