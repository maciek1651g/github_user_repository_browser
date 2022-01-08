import styles from "./ownerBoxStyle.module.css";
import { Box, Link, Paper, Typography } from "@mui/material";

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
                                <Typography component="span" fontWeight="bold">
                                    Opis:{" "}
                                </Typography>
                                {repo.description !== null
                                    ? repo.description
                                    : "Brak opisu."}
                            </Typography>
                            <Typography>
                                <Typography component="span" fontWeight="bold">
                                    Link do repozytorium:{" "}
                                </Typography>
                                <Link href={repo.html_url}>{repo.name}</Link>
                            </Typography>
                        </Box>
                    </Box>

                    <Box className={styles.dateAndStars}>
                        <Box>
                            <Typography>
                                <Typography component="span" fontWeight="bold">
                                    Stworzono:{" "}
                                </Typography>
                                {new Date(repo.created_at).toLocaleString()}
                            </Typography>
                            <Typography>
                                <Typography component="span" fontWeight="bold">
                                    Ostatnia aktualizajca:{" "}
                                </Typography>
                                {new Date(repo.updated_at).toLocaleString()}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                <Typography component="span" fontWeight="bold">
                                    Liczba gwiazdek:
                                </Typography>{" "}
                                {repo.stargazers_count}
                            </Typography>
                            <Typography>
                                <Typography component="span" fontWeight="bold">
                                    Otwarte zadania:
                                </Typography>{" "}
                                {repo.open_issues_count}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>
                            <Typography component="span" fontWeight="bold">
                                Licencja:
                            </Typography>{" "}
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
