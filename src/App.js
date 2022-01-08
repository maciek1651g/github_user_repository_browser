import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./Themes";
import React from "react";
import "./app.module.css";

function App() {
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
