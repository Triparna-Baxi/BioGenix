//Frontend for Home
import React from "react";
import styles from "./styles.module.css";

function Home() {
      return (
            <>
                  <body>
                        <div>
                              <img src="./home1.jpg" className={styles.img1} />
                              <text className={styles.msg}>Best Pathology Services, Multispecialities for any type of Diagnostics</text>
                              <a href="/Login">
                                    <div className={styles.Button}>
                                          <button type="button" className={styles.loginBtn}>
                                                <label className={styles.labelStyle}>Login</label>
                                          </button>
                                    </div>
                              </a>
                        </div>
                        <div>
                              <div className={styles.block3}>
                                    <div className={styles.block3_1}>
                                          <label className={styles.label1}>Most opted Tests</label>
                                    </div>
                              </div>
                              <div className={styles.block2}>
                                    <div className={styles.grp1}>
                                          <div className={styles.covidTestGrp}>
                                                <a href="/ExploreTests">
                                                      <img src="./covid.png" className={styles.covidImg} />
                                                      <text className={styles.covidText}>Covid Test</text>
                                                </a>
                                          </div>
                                          <div className={styles.basicProfileGrp}>
                                                <a href="/ExploreTests">

                                                      <img src="./basic.png" className={styles.basicImg} />
                                                      <text className={styles.basicText}>Basic Profile</text>
                                                </a>
                                          </div>
                                          <div className={styles.fullbdyTestGrp}>
                                                <a href="/ExploreTests">
                                                      <img src="./fullBodyScan.png" className={styles.fullbdyTestImg} />
                                                      <text className={styles.fullbdyTestText}>Full Body Scan</text>
                                                </a>
                                          </div>
                                          <div className={styles.minibdyTestGrp}>
                                                <a href="/ExploreTests">
                                                      <img src="./miniScan.png" className={styles.minibdyTestImg} />
                                                      <text className={styles.minibdyTestText}>Mini Scan</text>
                                                </a>
                                          </div>
                                          <div className={styles.cardioGrp}>
                                                <a href="/ExploreTests">
                                                      <img src="./cardio.png" className={styles.cardioImg} />
                                                      <text className={styles.cardioText}>Cardio Test</text>
                                                </a>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div>
                              <div className={styles.block4}>
                                    <div className={styles.feedbackBlk1}>
                                          <div className={styles.fd1}>
                                                <div className={styles.fd1_1}>
                                                      <text className={styles.rev1}>
                                                            Service is good, affordable pricing and timely report, overall experience is very good. - Mr. Abhishek Shah
                                                      </text>
                                                </div>
                                          </div>
                                          <div className={styles.fd2}>
                                                <div className={styles.fd2_1}>
                                                      <text className={styles.rev1}>
                                                            Great Experience, Best Quality Product and Best Facilities.<br />
                                                            -Ms. Malini Roy
                                                      </text>
                                                </div>
                                          </div>
                                          <div className={styles.fd3}>
                                                <div className={styles.fd3_1}>
                                                      <text className={styles.rev1}>
                                                            Well everything is fine, and I don’t think you need to change anything. <br />
                                                            -Mr. Dev Gandhi
                                                      </text>
                                                </div>
                                          </div>
                                          <div className={styles.fd4}>
                                                <div className={styles.fd4_1}>
                                                      <text className={styles.rev1}>
                                                            Service is good, affordable pricing and timely report, overall experience is very good. - Mr. Abhishek Shah
                                                      </text>
                                                </div>
                                          </div>
                                    </div>
                                    <div className={styles.fbBtn}>
                                          <a href="/Feedback">
                                                <button className={styles.fbBtnStyle}>
                                                      <text className={styles.fdBkLbl}>Give Feedback</text>
                                                </button>
                                          </a>
                                    </div>
                              </div>
                              <div className={styles.block5}>
                                    <div className={styles.block5_1}>
                                          <label className={styles.label2}>Customer Feedback</label>
                                    </div>
                              </div>
                        </div>
                        <div className={styles.container}>
                              <div className={styles.block6}>
                                    <div className={styles.block6_1}>
                                          <label className={styles.label3}>Browse</label>
                                    </div>
                              </div>
                              <div className={styles.links}>
                                    <a href="/AdminManagement" className={styles.L1}>Management</a>
                                    <a href="/FAQPage" className={styles.L2}>FAQs</a>
                              </div>
                              <text className={styles.col1}>
                                    Follow us:<br />
                                    Facebook Instagram <br /><br />

                                    Get in Touch:<br />
                                    Call us: 01234 56789<br />
                                    Mail us: biogenixLab@gmail.com
                              </text>
                        </div>
                  </body>
            </>
      )
}
export default Home;