//Frontend for Login of user
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";


function Login(){
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");


	const handleChange = ({ currentTarget: input }) => {

		console.log(input)
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {

		e.preventDefault();
		try {

			const url = "http://localhost:5000/api/auth/Login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
		<>
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login</h1>
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
						
						<button type="submit" className={styles.green_btn} onClick={handleSubmit}>
							Sign In
						</button>
						<Link to="/forgot-password" style={{alignItems: "center", fontFamily: 'Montserrat',
							fontStyle: "normal",
							fontweight: 400,
							fontsize: 14,
							lineheight: 24}}>
							<p style={{padding: "0 15px"}}>Forgot Your Password?</p>
						</Link>
						{error && <div className={styles.error_msg}>{error}</div>}
						
						<h2>Don't have an account?</h2>
						<Link to="/signup">
							<button type="button" className={styles.green_btn}>
								Sign Up
							</button>
						</Link>
						
					</form>
				</div>
				
			</div>
		</div>
		</>
	);
};

export default Login;
