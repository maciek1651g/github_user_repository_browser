import styles from "./ownerBoxStyle.module.css";
import React from "react";
import OwnerBox from "./OwnerBox";
import RepoBox from "./RepoBox";
import { Pagination, Paper, Typography } from "@mui/material";

const ResultBox = ({ owner, repos, page, setPage }) => {
    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const generatePage = () => {
        const pageOfRepos = [];
        const numberFirstRepo = (page - 1) * 30;

        for (
            let i = numberFirstRepo;
            i < numberFirstRepo + 30 && i < repos.length;
            i++
        ) {
            pageOfRepos.push(<RepoBox key={i + 1} index={i + 1} repo={repos[i]} />);
        }

        return pageOfRepos;
    };

    return (
        <Paper elevation={8} id="result" className={styles.result}>
            {owner ? (
                <OwnerBox
                    owner={owner}
                    reposCount={repos !== null ? repos.length : 0}
                />
            ) : (
                <Typography
                    fontSize={25}
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ margin: "20px" }}
                >
                    Tutaj pojawią się informację o użytkowniku i jego repozytoriach
                </Typography>
            )}

            {repos ? (
                repos.length !== 0 ? (
                    <>
                        {generatePage()}
                        {repos.length / 30 > 1 && (
                            <Pagination
                                count={Math.round(repos.length / 30) + 1}
                                page={page}
                                onChange={handleChangePage}
                            />
                        )}
                    </>
                ) : (
                    <Typography
                        fontSize={25}
                        fontWeight="bold"
                        textAlign="center"
                        sx={{ margin: "20px" }}
                    >
                        Brak repozytoriów
                    </Typography>
                )
            ) : null}
        </Paper>
    );
};

export default ResultBox;
