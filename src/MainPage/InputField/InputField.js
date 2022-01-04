import styles from "./inputFieldStyle.module.css";
import React from "react";

const InputField = ({ type = "text", text, id, value, setValue }) => {
    const onChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={styles.loginBox}>
            <input
                id={id}
                type={type}
                className={styles.loginInput}
                value={value}
                onChange={onChange}
                required
            />
            <span className={styles.linkInput}>https://github.com/</span>
            <span className={styles.placeHolder}>{text}</span>
        </div>
    );
};

export default InputField;
