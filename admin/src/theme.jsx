import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1976d2", // Customize primary color
        },
        secondary: {
            main: "#dc004e", // Customize secondary color
        },
        background: {
            default: "#121212", // Customize background color
            paper: "#1c1c1c", // Customize paper color
        },
        text: {
            primary: "#ffffff", // Customize primary text color
            secondary: "#bbbbbb", // Customize secondary text color
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif", // Customize font
    },
});

export default darkTheme;
