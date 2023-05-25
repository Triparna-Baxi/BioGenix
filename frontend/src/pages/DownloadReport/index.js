//Frontend for Downloading Customer report
import React, {useState} from "react";
import styles from "./styles.module.css";
import axios from "axios";

function DownloadReport() {
    let [data,setData]=useState({email:"",password:""})
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const res = await axios.post("http://localhost:5000/api/report/sendPdf", data);
            console.log(res.data);
            alert("Report is sent to your email")
        } catch (error) {
            console.error(error);
            alert('Server error');
        }
    }
    return (
		<>
			<body>
				<div className={styles.left}>
					<div className={styles.left_style}>
						<div className={styles.heading}>Download Report</div>
						<div className={styles.line}>You can download your report using email ID and Login Password</div>
                        <form onSubmit={handleSubmit}>
							<div className={styles.box1}>email</div>

							<input
							type="email"
							placeholder="Enter your email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input1}
						/>
						<div className={styles.box2}>Password</div>
						<input
							type="password"
							placeholder="Enter your Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input2}
						/>
						<div className={styles.downloadBtn}>
							<button className={styles.downloadBtn_Style} type="submit" onClick={handleSubmit} >Download Report</button>
						</div>
                        </form>
					</div>
				</div>
				<div className={styles.right}>
					<img src='report.jpg' className={styles.right_style}></img>
				</div>
			</body>
		</>
	)
}
export default DownloadReport;
