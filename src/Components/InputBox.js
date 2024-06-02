import React, { useState } from 'react'
import styles from './component.module.css'
import { FiEyeOff, FiEye } from "react-icons/fi";
const InputBox = ({ name, type, id, value, placeholder, icon }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className={styles.inputBoxDiv}>
            <input
                name={name}
                type={type == "password" ? passwordVisible ? "text" : "password" : "text"}
                id={id}
                value={value}
                placeholder={placeholder}
                className={styles.inputBox}
            />
            <span className={styles.inputIcon}>
                {icon}
            </span>
            {
                type == "password" ?
                    <span className={`${styles.inputIcon} ${styles.inputIconEye}`}
                        onClick={() => setPasswordVisible(currentVal => !currentVal)}
                    >
                        {!passwordVisible ? <FiEyeOff /> : <FiEye />}
                    </span>
                    : ""
            }
        </div>
    )
}

export default InputBox