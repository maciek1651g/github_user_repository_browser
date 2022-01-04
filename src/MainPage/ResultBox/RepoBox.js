import styles from "./ownerBoxStyle.module.css";
import { Box, Paper, Typography } from "@mui/material";

const RepoBox = ({ repo, index }) => {
    return (
        <Paper className={styles.contentResult}>
            <Box className={styles.infoRepo}>
                <Box className={styles.contentInfoRepo}>
                    <Box>
                        <Box>
                            <Typography component="h2" sx={{ marginBottom: "0" }}>
                                {index}. Nazwa:{" "}
                                <span style={{ color: "#43D7E2", fontSize: "27px" }}>
                                    {repo.name}
                                </span>
                            </Typography>
                            <p style={{ color: "#979797", marginTop: "0" }}>
                                Pełna nazwa: {repo.full_name}
                            </p>
                        </Box>
                        <Box>
                            <p>
                                <b>Opis:</b>{" "}
                                {repo.description !== null
                                    ? repo.description
                                    : "Brak opisu."}
                            </p>
                            <p>
                                <b>Link do repozytorium:</b>{" "}
                                <a href={repo.html_url}>{repo.name}</a>
                            </p>
                        </Box>
                    </Box>

                    <Box className={styles.dateAndStars}>
                        <Box>
                            <p>
                                <b>Stworzono:</b>{" "}
                                {new Date(repo.created_at).toLocaleString()}
                            </p>
                            <p>
                                <b>Ostatnia aktualizajca:</b>{" "}
                                {new Date(repo.updated_at).toLocaleString()}
                            </p>
                        </Box>
                        <Box>
                            <p>
                                <b>Liczba gwiazdek:</b> {repo.stargazers_count}
                            </p>
                            <p>
                                <b>Otwarte zadania:</b> {repo.open_issues_count}
                            </p>
                        </Box>
                    </Box>
                    <Box>
                        <p>
                            <b>Licencja:</b>{" "}
                            {repo.license !== null
                                ? repo.license.name
                                : "Brak informacji."}
                        </p>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default RepoBox;
