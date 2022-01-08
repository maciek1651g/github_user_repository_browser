import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#707070",
            paper: "#232323",
        },
        primary: {
            main: "#43D7E2",
        },
    },
});

const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#E7E7E7",
            paper: "#FFFFFA",
        },
        primary: {
            main: "#43D7E2",
        },
    },
});

export { lightTheme, darkTheme };
