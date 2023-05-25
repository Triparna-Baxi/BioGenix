//Frontend for Email verification for login signup
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:5000/api/users/${param.id}/verify/${param.token}`;
                const { data } = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            } catch (error) {
                console.log(error);
                setValidUrl(false);
            }
        };
        verifyEmailUrl();
    }, [param]);

    return (
        <React.Fragment>
            {validUrl ? (
                <div className={styles.container}>
                    <h1>Email verified successfully</h1>
                    <Link to="/login">
                        <button className={styles.green_btn}>Login</button>
                    </Link>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </React.Fragment>
    );
};

export default EmailVerify;
