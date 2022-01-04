import styles from "./mainPageStyle.module.css";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MainPage = () => {
    const [showLoading, setLoading] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [owner, setOwner] = React.useState(null);
    const [repos, setRepos] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [returnTopButton, setReturnTopButton] = React.useState(false);
    const history = useNavigate();
    //const location = useLocation();
    const { id } = useParams();

    return (
        <Paper className={styles.mainContainer} elevation={6}>
            <Box className={styles.headerContent}>
                <div className={styles.title}>
                    <h1>Przeglądarka repozytoriów githuba</h1>
                </div>
                <div className={styles.description}>
                    <Typography fontSize={20} textAlign="center">
                        Witaj na stronie przeznaczonej do wyszukiwania i przeglądania
                        publicznych repozytoriów umieszczonych na platformie
                        github.com. Wystarczy, że wpiszesz nazwę użytkownika w polę
                        poniżej i klikniesz przycisk szukaj.
                    </Typography>
                </div>
                <div id="content">
                    <div className="form">
                        <form></form>
                    </div>
                </div>
            </Box>
        </Paper>
    );
};

export default MainPage;
