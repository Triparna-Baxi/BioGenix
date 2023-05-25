//Frontend for feedback
import React, {useState} from 'react';
import styles from './styles.module.css';
import ReactStars from "react-rating-stars-component";
import axios from "axios";



function Feedback() {
    const [data, setData] = useState({ name: "", feedback: "",rating:0.0 });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const ratingChanged=(r)=>{
        setData({...data,["rating"]:r});
    }
    const feedbackObtained = async (e) => {

        e.preventDefault();
        try {

            const url = "http://localhost:5000/api/feedback/";
            const {data: res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                console.log(error)
            }
        }
        alert("Thank you for your valuable feedback!");

    };

    return (
        <div className={styles.container}>
            <img src='feedback.jpg' alt='img' className={styles.bkgImg} />
            <div className={styles.feedbackForm}>
                <h1 className={styles.formTitle}>Give us your feedback</h1>
                <form>
                    <label htmlFor="name" className={styles.formLabel}>Your Name</label>
                    <input id="name" name="name" type="text" placeholder="Name" className={styles.formInput} value={data.name} onChange={handleChange}/>
                    <label htmlFor="feedback" className={styles.formLabel}>Write your feedback</label>
                    <textarea id="feedback" name="feedback" className={styles.formTextArea} placeholder="Type here" value={data.feedback} onChange={handleChange}></textarea>
                    <div className={styles.rating}>
                        <label className={styles.formLabel}>Rate us</label>
                        <ReactStars
                            count={5}
                            size={40}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                            value={data.rating}
                            name="rating"
                            onChange={ratingChanged}
                        />
                    </div>
                    <div className={styles.formButton}>
                        <button type="button" onClick={feedbackObtained} className={styles.submitButton}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Feedback;
