import styles from "./ownerBoxStyle.module.css";
import { Box, Link, Paper, Stack, Typography } from "@mui/material";

const OwnerBox = (props) => {
    return (
        <Box className={styles.contentResult}>
            <Paper elevation={12} className={styles.ownerInfo}>
                <Box className={styles.contentInfoOwner}>
                    <Box className={styles.contentInfoOwnerLeft}>
                        <Box className={styles.avatarOwner}>
                            <img
                                src={props.owner.avatar_url}
                                alt="Avatar"
                                className={styles.avatar}
                            />
                        </Box>
                    </Box>
                    <Stack spacing={2} className={styles.contentInfoOwnerRight}>
                        <Typography
                            variant="h5"
                            component="h2"
                            fontWeight={"bold"}
                            sx={{ marginLeft: "10px" }}
                        >
                            Właściciel repozytoriów:{" "}
                            <Typography
                                component="span"
                                fontSize={28}
                                fontWeight="bold"
                                color="#43D7E2"
                            >
                                {props.owner.login}
                            </Typography>
                        </Typography>
                        <Typography fontWeight="bold">
                            Link do platformy github:{" "}
                            <Link href={props.owner.html_url}>
                                {props.owner.html_url}
                            </Link>
                        </Typography>
                        <Typography fontWeight="bold">
                            Liczba repozytoriów:{" "}
                            <Typography component="span">
                                {props.reposCount}
                            </Typography>
                        </Typography>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
};

export default OwnerBox;
