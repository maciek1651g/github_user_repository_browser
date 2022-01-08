import styles from "../mainPageStyle.module.css";
import InputField from "../InputField/InputField";
import { Button, Paper, Stack } from "@mui/material";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const FormBox = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();

    const [userName, setUserName] = React.useState("");

    const onClickSearchButton = (event) => {
        event.preventDefault();
        if (userName && userName !== "") {
            navigate("/" + userName);
        }
    };

    React.useEffect(() => {
        if (id && id !== "" && userName !== id) {
            setUserName(id);
        }
    }, [location]);

    return (
        <Paper elevation={8} className={styles.form}>
            <form>
                <Stack spacing={2}>
                    <InputField
                        id="name"
                        text="Nazwa użytkownika"
                        value={userName}
                        setValue={setUserName}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        size="large"
                        fullWidth={true}
                        onClick={onClickSearchButton}
                    >
                        Szukaj
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
};

export default FormBox;
