import styles from "./ownerBoxStyle.module.css";
import React from "react";
import OwnerBox from "./OwnerBox";
import RepoBox from "./RepoBox";
import { Paper, Typography } from "@mui/material";

const ResultBox = ({ owner, repos }) => {
    return (
        <Paper elevation={6} id="result" className={styles.result}>
            {owner ? (
                <OwnerBox
                    owner={owner}
                    reposCount={repos !== null ? repos.length : 0}
                />
            ) : (
                <Typography className={styles.pInfo}>
                    Tutaj pojawią się informację o użytkowniku i jego repozytoriach
                </Typography>
            )}

            {repos ? (
                repos.length !== 0 ? (
                    repos.map((repo, index) => (
                        <RepoBox key={index + 1} index={index + 1} repo={repo} />
                    ))
                ) : (
                    <Typography className={styles.pInfo}>
                        Brak repozytoriów
                    </Typography>
                )
            ) : null}
        </Paper>
    );
};

export default ResultBox;
