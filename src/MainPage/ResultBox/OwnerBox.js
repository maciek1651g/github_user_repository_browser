import styles from "./ownerBoxStyle.module.css";
import { Box, Typography } from "@mui/material";

const OwnerBox = (props) => {
    return (
        <Box className={styles.contentResult}>
            <Box className={styles.ownerInfo}>
                <Box className={styles.contentInfoOwner}>
                    <Box className={styles.contentInfoOwnerLeft}>
                        <Box className={styles.avatarOwner}>
                            <img
                                src={props.owner.avatar_url}
                                alt="Avatar"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Box>
                    </Box>
                    <Box className={styles.contentInfoOwnerRight}>
                        <Typography component="h2" sx={{ marginLeft: "10px" }}>
                            Właściciel repozytoriów:{" "}
                            <Typography sx={{ color: "#43D7E2", fontSize: "30px" }}>
                                {props.owner.login}
                            </Typography>
                        </Typography>
                        <Typography
                            component="h2"
                            sx={{ marginLeft: "10px" }}
                        ></Typography>
                        <p>
                            <b>Link do platformy github:</b>{" "}
                            <a href={props.owner.html_url}>{props.owner.html_url}</a>
                        </p>
                        <p>
                            <b>Liczba repozytoriów:</b> {props.reposCount}
                        </p>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default OwnerBox;
