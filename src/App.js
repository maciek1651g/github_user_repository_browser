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

    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router basename="/github_user_repository_browser">
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
