import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import React from "react";

const ArrowUpButton = ({ isVisible }) => {
    const returnToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <Fab
                    sx={{ position: "fixed", left: "16%", bottom: "90px" }}
                    onClick={returnToTop}
                    size="large"
                    color="primary"
                >
                    <ArrowUpwardIcon />
                </Fab>
            )}
        </>
    );
};

export default ArrowUpButton;
