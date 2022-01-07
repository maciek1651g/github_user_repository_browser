import styles from "./mainPageStyle.module.css";
import {
    Alert,
    Backdrop,
    Box,
    CircularProgress,
    Fab,
    IconButton,
    Paper,
    Snackbar,
    SvgIcon,
    Typography,
} from "@mui/material";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ResultBox from "./ResultBox/ResultBox";
import FormBox from "./FormBox/FormBox";
import { getUserInfoAndRepos } from "../ClientAPI/ClientAPI";
import { useLocation, useParams } from "react-router-dom";

const MainPage = (props) => {
    const location = useLocation();
    const { id } = useParams();

    const [isLoading, setLoading] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [owner, setOwner] = React.useState(null);
    const [repos, setRepos] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [isShowErrorMessage, setShowErrorMessage] = React.useState(false);
    const [returnTopButton, setReturnTopButton] = React.useState(false);
    const [page, setPage] = React.useState(1);

    const downloadAndShowRepos = async (userName) => {
        setLoading(true);
        const result = await getUserInfoAndRepos(userName, onError);
        if (result) {
            setOwner(result.owner);
            result.repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
            setRepos(result.repos);
        }
        setLoading(false);
        resetPagination();
    };

    const onError = (error) => {
        setErrorMessage(error.errorMessageForUser);
        setShowErrorMessage(true);
    };

    const disableErrorMessage = () => {
        setShowErrorMessage(false);
    };

    const resetPagination = () => {
        setPage(1);
    };

    const returnToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    React.useEffect(() => {
        window.onscroll = () => {
            if (
                document.body.scrollTop > 600 ||
                document.documentElement.scrollTop > 600
            ) {
                if (returnTopButton === false) {
                    setReturnTopButton(true);
                }
            } else {
                if (returnTopButton === true) {
                    setReturnTopButton(false);
                }
            }
        };
    });

    React.useEffect(() => {
        if (id && id !== "") {
            if (id !== userName) {
                setUserName(id);
            }
            downloadAndShowRepos(id);
        }
    }, [location]);

    return (
        <Box
            sx={{
                width: "100%",
                minWidth: "480px",
                minHeight: "100vh",
                bgcolor: "background.default",
                boxSizing: "border-box",
            }}
        >
            <Paper className={styles.mainContainer} elevation={4}>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-end",
                        padding: "0 40px 0 0 ",
                        boxSizing: "border-box",
                    }}
                >
                    <IconButton onClick={props.toggleThemeMode}>
                        <SvgIcon>
                            <Brightness4OutlinedIcon />
                        </SvgIcon>
                    </IconButton>
                </Box>
                <Box className={styles.headerContent}>
                    <Box className={styles.title}>
                        <Typography variant="h3" component="h1" textAlign="center">
                            Przeglądarka repozytoriów githuba
                        </Typography>
                    </Box>
                    <Box className={styles.description}>
                        <Typography fontSize={20} textAlign="center">
                            Witaj na stronie przeznaczonej do wyszukiwania i
                            przeglądania publicznych repozytoriów umieszczonych na
                            platformie github.com. Wystarczy, że wpiszesz nazwę
                            użytkownika w polę poniżej i klikniesz przycisk szukaj.
                        </Typography>
                    </Box>
                    <Box id="content">
                        <FormBox userName={userName} setUserName={setUserName} />
                        <ResultBox
                            owner={owner}
                            repos={repos}
                            page={page}
                            setPage={setPage}
                        />
                    </Box>
                </Box>
            </Paper>

            <Backdrop open={isLoading}>
                <CircularProgress color="primary" />
            </Backdrop>
            <Snackbar
                open={isShowErrorMessage}
                autoHideDuration={4000}
                onClose={disableErrorMessage}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Alert
                    variant="filled"
                    onClose={disableErrorMessage}
                    severity="error"
                >
                    {errorMessage}
                </Alert>
            </Snackbar>
            {returnTopButton ? (
                <Fab
                    sx={{ position: "fixed", left: "16%", bottom: "90px" }}
                    onClick={returnToTop}
                    size="large"
                    color="primary"
                >
                    <ArrowUpwardIcon />
                </Fab>
            ) : null}
        </Box>
    );
};

export default MainPage;
