import styles from "./ownerBoxStyle.module.css";
import { Box, Paper, Stack, Typography } from "@mui/material";

const RepoBox = ({ repo, index }) => {
    return (
        <Paper elevation={12} className={styles.contentResult}>
            <Box className={styles.infoRepo}>
                <Box className={styles.contentInfoRepo}>
                    <Box>
                        <Box>
                            <Typography
                                variant="h5"
                                component="h2"
                                fontWeight="bold"
                                sx={{ marginBottom: "0" }}
                            >
                                {index}. Nazwa:{" "}
                                <Typography
                                    component="span"
                                    fontSize={27}
                                    color="#43D7E2"
                                    fontWeight="bold"
                                >
                                    {repo.name}
                                </Typography>
                            </Typography>
                            <Typography color="#979797" style={{ marginTop: "0" }}>
                                Pełna nazwa: {repo.full_name}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <b>Opis:</b>{" "}
                                {repo.description !== null
                                    ? repo.description
                                    : "Brak opisu."}
                            </Typography>
                            <Typography>
                                <b>Link do repozytorium:</b>{" "}
                                <a href={repo.html_url}>{repo.name}</a>
                            </Typography>
                        </Box>
                    </Box>

                    <Box className={styles.dateAndStars}>
                        <Box>
                            <Typography>
                                <b>Stworzono:</b>{" "}
                                {new Date(repo.created_at).toLocaleString()}
                            </Typography>
                            <Typography>
                                <b>Ostatnia aktualizajca:</b>{" "}
                                {new Date(repo.updated_at).toLocaleString()}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <b>Liczba gwiazdek:</b> {repo.stargazers_count}
                            </Typography>
                            <Typography>
                                <b>Otwarte zadania:</b> {repo.open_issues_count}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>
                            <b>Licencja:</b>{" "}
                            {repo.license !== null
                                ? repo.license.name
                                : "Brak informacji."}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default RepoBox;
