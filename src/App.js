import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "#707070",
                paper: "#6c6c6c",
            },
            primary: {
                main: "#43D7E2",
                contrastText: "#FFFFFF",
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
                contrastText: "#FFFFFF",
            },
        },
    });

    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainPage
                                toggleThemeMode={() => setDarkMode(!darkMode)}
                            />
                        }
                    >
                        <Route
                            path=":id"
                            element={
                                <MainPage
                                    toggleThemeMode={() => setDarkMode(!darkMode)}
                                />
                            }
                        />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
