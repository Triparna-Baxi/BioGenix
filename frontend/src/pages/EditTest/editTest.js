//Frontend for Editing tests on customer side
import {useState} from "react";
import axios from "axios";
import styles from "./styles.module.css";

const EditTest = () => {
    const [data, setData] = useState({email: "", password: "", testname: "", testprice: ""});
    const changeData = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
        

    }
    // 
    const handleSubmit = async (e) => {
        alert("Test added successfully");
        console.log(data)
        e.preventDefault();
        const formData={
            email: data.email, password: data.password, test:{name: data.testname, price: data.testprice}
        }
        try {

            const url = "http://localhost:5000/api/tests/";
            const {data: res} = await axios.post(url, formData);
            localStorage.setItem("token", res.data);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                console.log(error.response.data.message);
            }
        }
    };

    return (
        <>
       <section className={styles.containerLeft}>
                        <img src="./Admin.jpg" alt="img" />
                  </section>
                  <section className={styles.containerRight}>
                        <div className={styles.block}>
                              <h3 style={{ textAlign: "center" }}>Manage Tests Packages</h3>
                              <input type="text" onChange={changeData} className={styles.ID} name="email"  value={data.email}  placeholder='Email'/><br/>
                              <input type="password" onChange={changeData} className={styles.Password} name="password"  value={data.password}  placeholder='Password'/><br/>
                              <input type="text" onChange={changeData} className={styles.Name} name="testname"  value={data.testname}  placeholder='Test Name'/><br/>
                              <input type="text" onChange={changeData} className={styles.Price} name="testprice"  value={data.testprice}  placeholder='Test Price'/><br/>

                              <button type="submit" className={styles.btn} style={{marginLeft: "35px"}} onClick={handleSubmit}>Add Package</button>
                              <button type="submit" className={styles.btn} onClick={handleSubmit}>Update Package</button>
                              <button type="submit" className={styles.btn} onClick={handleSubmit}>Delete Package</button>
                        </div>
                  </section >
        </>
    );
}

export default EditTest;