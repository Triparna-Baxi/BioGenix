//Frontend for Customer sign up
import {useState} from "react";
import axios from "axios";
import styles from "./styles.module.css";

const Register = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const[msg, setMsg] = useState("");


    const handleChange = ({currentTarget: input}) => {

        console.log(input)
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {

            const url = "http://localhost:5000/api/auth/Register";
            const {data: res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            setMsg("Message Sent");
            window.location = "/Login";
            

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };
    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <h2>Nice to meet you</h2>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        {msg && <div className={styles.success_msg}>{msg}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
