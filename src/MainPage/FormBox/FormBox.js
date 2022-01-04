import styles from "../mainPageStyle.module.css";
import InputField from "../InputField/InputField";
import { Button, Paper } from "@mui/material";
import React from "react";
import ClientAPI from "./../../ClientAPI/ClientAPI";

const FormBox = ({ userName, setUserName }) => {
    const onClickSearchButton = async (event) => {
        event.preventDefault();
        const clientAPI = new ClientAPI();
        clientAPI.onErrorDelegate = (error) => {
            console.log("funkcja deletaga");
        };
        console.log(
            await clientAPI.sendMessage("GET", "/users/" + userName + "/repos")
        );
    };

    return (
        <Paper elevation={6} className={styles.form}>
            <form>
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
            </form>
        </Paper>
    );
};

export default FormBox;
