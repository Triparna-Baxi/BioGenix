//Admin Side Page
import styles from "./styles.module.css";

const AdminManagement = ()=>{
    return(
        <>
            <section className={styles.containerLeft}>
                <img src="./Admin.jpg" alt="img" />
            </section>
            <section className={styles.containerRight}>
                <div className={styles.block}>
                    <h1 style={{ textAlign: "center" }}>Hello, Admin!!!</h1>
                    <a href="/editTest"><button type='button' className={styles.btn1}>Manage Test Packages</button></a>
                </div>
            </section>
        </>
    );
}
export  default  AdminManagement;