import styles from "./mainPageStyle.module.css";
import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    IconButton,
    Paper,
    SvgIcon,
    Typography,
} from "@mui/material";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import React from "react";
import ResultBox from "./ResultBox/ResultBox";
import FormBox from "./FormBox/FormBox";

const MainPage = (props) => {
    const [isLoading, setLoading] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [owner, setOwner] = React.useState(null);
    const [repos, setRepos] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [returnTopButton, setReturnTopButton] = React.useState(false);

    return (
        <Paper className={styles.mainContainer} elevation={6}>
            <Box onClick={props.toggleThemeMode}>
                <IconButton>
                    <SvgIcon>
                        <Brightness4OutlinedIcon />
                    </SvgIcon>
                </IconButton>
            </Box>
            <Box className={styles.headerContent}>
                <Box className={styles.title}>
                    <h1>Przeglądarka repozytoriów githuba</h1>
                </Box>
                <Box className={styles.description}>
                    <Typography fontSize={20} textAlign="center">
                        Witaj na stronie przeznaczonej do wyszukiwania i przeglądania
                        publicznych repozytoriów umieszczonych na platformie
                        github.com. Wystarczy, że wpiszesz nazwę użytkownika w polę
                        poniżej i klikniesz przycisk szukaj.
                    </Typography>
                </Box>
                <Box id="content">
                    <FormBox userName={userName} setUserName={setUserName} />
                    <ResultBox />
                </Box>
            </Box>
            <Backdrop open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Paper>
    );
};

export default MainPage;
