//Frontend for Contact Us
import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from 'axios';

function ContactUs() {
      const [data, setData] = useState({ name: "", email: "", message: "" });

      const handleChange = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            setData({...data, [name]: value})
      }
      const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                  alert('Contact form submitted successfully!');

                  const res = await axios.post("http://localhost:5000/api/contact/", data);
                } catch (error) {
                  console.error(error);
                  alert('Server error');
                }
            }

      return (
            <>
                  <body>
                        <div><img src='contactUs.jpg' className={styles.imgStyle}></img>
                        </div>
                        <div className={styles.blockStyle}>
                              <div className={styles.block2Style}>
                                    <div className={styles.sendMsgStyle}>
                                          <text className={styles.title}>Send Message</text>
                                    </div>
                                    <form  onSubmit={handleSubmit}>
                                          <div>
                                                <text className={styles.nameStyle}>Name: </text>

                                                <input name="name" type="text" className={styles.nameBox} onChange={handleChange} value={data.name}/>
                                                <text className={styles.emailStyle}>Email ID: </text>

                                                <input name="email" type="email" className={styles.emailBox} onChange={handleChange} value={data.email}/>
                                                <text className={styles.msgStyle}>Type your message: </text>

                                                <textarea name="message" type="text" className={styles.msgBox} onChange={handleChange} value={data.message}/>
                                          </div>
                                          <div className={styles.btnCase}>
                                                <button type="submit" className={styles.sendBtn} onClick={handleSubmit}>
                                                      Send
                                                </button>
                                          </div>
                                    </form>
                                    <div>
                                          <div className={styles.grp1}>
                                                <img src="./mail.png" className={styles.mailIcon} />
                                                <text className={styles.mailStyle}>biogenixLab@gmail.com</text>
                                          </div>
                                          <div className={styles.grp2}>
                                                <img src="./address.png" className={styles.addIcon} />
                                                <text className={styles.addStyle}>44, BlueStone Complex, Street-1, Opp. Nexas Complex, Nadiad</text>
                                          </div>
                                          <div className={styles.grp3}>
                                                <img src="./phone.png" className={styles.phoneIcon} />
                                                <text className={styles.phoneStyle}>+91 01234 56789</text>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </body>
            </>
      )
    }

export default ContactUs;