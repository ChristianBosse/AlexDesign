import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Input,
} from "@mui/material";
import api from "./axiosInstance";

function AddProjectModal({ onProjectAdded }) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setName("");
        setDescription("");
        setImages([]);
        setOpen(false);
    };

    const handleAddProject = async () => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);

            images.forEach(image => {
                formData.append("images", image);
            });

            const response = await api.post("/api/projects/add", formData);

            onProjectAdded(response.data);
            handleClose();
        } catch (error) {
            console.error("Failed to add project:", error);
            // Add more specific error handling here
        }
    };

    const handleImageChange = e => {
        setImages([...images, ...e.target.files]);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Add New Project
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Project</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        label="Project Name"
                        variant="outlined"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Project Description"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Input
                        type="file"
                        inputProps={{ accept: "image/*", multiple: true }}
                        onChange={handleImageChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddProject} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddProjectModal;
