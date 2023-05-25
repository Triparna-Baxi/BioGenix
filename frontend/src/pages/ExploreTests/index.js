//Frontend for Test Page
import { Circle } from "@mui/icons-material";
import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import React from "react";

function ExploreTests() {
      return (
            <>

                  <div className={styles.leftContainer}>
                        <nav id="navbar-example3" >
                              <nav className="nav nav-pills flex-column">
                                    <a className="nav-link" style={{ color: "white" }} href="#individualTests ">Individual Tests</a>
                                    <a className="nav-link" style={{ color: "white" }} href="#testPackages">Test Packages</a>
                                    <a className="nav-link" style={{ color: "white" }} href="#instForTest">Get Ready For tests</a>
                              </nav>
                        </nav>
                  </div>

                  <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0" className={styles.rightContainer}>
                        <h4 id="individualTests" className={styles.menu1}>Individual Tests</h4>
                        <p>
                              <form style={{marginTop: "0px", marginLeft: "0px"}}>
                                    <div className={styles.division}>
                                          <label>
                                                Complete Blood Count (CBC)      <pre>Rs. 749</pre>
                                          </label>
                                          <br />
                                          <label>
                                                
                                                Liver Function Test (LFT)     <pre>Rs. 749</pre>
                                          </label>
                                          <br />
                                          <label>
                                                
                                                Complete Urine Examination     <pre>Rs. 749</pre>
                                          </label>
                                          <br />
                                    </div>
                                    <div className={styles.division}>
                                          <label>
                                                
                                                Renal Function Test         <pre>Rs. 749</pre>
                                          </label>
                                          <br />
                                          <label>
                                               
                                                Thyroid Profile Test            <pre>Rs. 749</pre>
                                          </label>
                                          <br />
                                          <label>
                                                
                                                Lipid Profile           <pre>Rs. 749</pre>
                                          </label>
                                          <br />
                                    </div>
                                    <div className={styles.division}>
                                          <label>
                                                
                                                Electrolytes-serum     <pre>Rs. 749</pre>
                                          </label>
                                          <br />
                                          <label>
                                                
                                                COVID-19 RTPCR Test     <pre>Rs. 749</pre>
                                          </label>
                                          <br />
                                          <label>
                                               
                                                Culture and Sensitivity Urine   <pre>Rs. 749</pre>
                                          </label>
                                    </div>
                              </form>
                        </p>
                        <h4 id="testPackages" className={styles.menu2}>Test Packages</h4>
                        <p>
                              <div>
                                    <div className="accordion" id="accordionExample">
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="testno1">
                                                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Covid test
                                                      </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="testno1" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <ul style={{ listStyle: Circle }}>
                                                                  <li>Hemogram (26)</li>
                                                                  <li>CRP Test</li>
                                                                  <li>RBS</li>
                                                                  <li>SGPT</li>
                                                                  <li>Creatintine</li>
                                                                  <li>LDH</li>
                                                                  <li>D-Dimer</li>
                                                                  <li>Ferritine</li>
                                                                  <li>33 Tests <strong>@ Rs. 500</strong></li>
                                                            </ul>
                                                            <Link to="/BookAppointment">
                                                                        <button type="submit" style={{backgroundColor: "#FBBD66"}}>
                                                                              Book
                                                                        </button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="testno2">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Basic Profile
                                                      </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="testno2" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <ul style={{ listStyle: Circle }}>
                                                                  <li>Hemogram (26)</li>
                                                                  <li>Lipid Profile</li>
                                                                  <li>Liver Function</li>
                                                                  <li>Kidney Function</li>
                                                                  <li>Thyroid profile</li>
                                                                  <li>33 Tests <strong>@ Rs. 800</strong></li>
                                                            </ul>
                                                            <Link to="/BookAppointment">
                                                                        <button type="submit" style={{backgroundColor: "#FBBD66"}}>
                                                                              Book
                                                                        </button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="testno3">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Full Body Scan
                                                      </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="testno3" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <ul style={{ listStyle: Circle }}>
                                                                  <li>Hemogram (26)</li>
                                                                  <li>Lipid Profile</li>
                                                                  <li>Liver Function</li>
                                                                  <li>Kidney Function Test</li>
                                                                  <li>Thyroid profile</li>
                                                                  <li>Vitamin Profile</li>
                                                                  <li>Iron Deficiency profile</li>
                                                                  <li>HBA1C</li>
                                                                  <li>CRP</li>
                                                                  <li>58 Tests <strong>@ Rs. 700</strong></li>
                                                            </ul>
                                                            <Link to="/BookAppointment">
                                                                        <button type="submit" style={{backgroundColor: "#FBBD66"}}>
                                                                              Book
                                                                        </button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="testno4">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            Mini Scan
                                                      </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="testno4" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <ul style={{ listStyle: Circle }}>
                                                                  <li>Hemogram (26)</li>
                                                                  <li>Lipid Profile</li>
                                                                  <li>Liver Function</li>
                                                                  <li>Kidney Function</li>
                                                                  <li>Thyroid profile</li>
                                                                  <li>HBA1C</li>
                                                                  <li>53 Tests <strong>@ Rs. 849</strong></li>
                                                            </ul>
                                                            <Link to="/BookAppointment">
                                                                        <button type="submit" style={{backgroundColor: "#FBBD66"}}>
                                                                              Book
                                                                        </button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFive">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            Cardio Test
                                                      </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="testno5" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <ul style={{ listStyle: Circle }}>
                                                                  <li>Hemogram (26)</li>
                                                                  <li>Lipid Profile</li>
                                                                  <li>Liver Function</li>
                                                                  <li>Kidney Function</li>
                                                                  <li>Thyroid profile</li>
                                                                  <li>Cardiac Risk Makers</li>
                                                                  <li>Vitamin Profile</li>
                                                                  <li>Iron Deficiency Profile</li>
                                                                  <li>CRP</li>
                                                                  <li>Ferritine</li>
                                                                  <li>HBA1C</li>
                                                                  <li>67 Tests <strong>@ Rs. 1300</strong></li>
                                                            </ul>
                                                            <Link to="/BookAppointment">
                                                                        <button type="submit" style={{backgroundColor: "#FBBD66"}}>
                                                                              Book
                                                                        </button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </p>
                        <h4 id="instForTest" className={styles.menu3}>Get Ready For tests</h4>
                        <p style={{backgroundColor: "#f4f4f4", padding: "10px"}}>
                              For blood test, blood is collected after overnight fast ie no food intake for 10-12 hours. Tea, coffee, alcohol intake and smoking are not permitted during this period. Reasonable amount of water intake is permitted.<br />
                              Try to avoid performing heavy exercises a day before the blood test.<br /><br />
                              Do not smoke or drink alcohol for 24 hours before the blood test.<br />
                              Blood tests are not usually recommended after physiotherapy, massage therapy, or reflexotherapy.<br />
                        </p>
                  </div>
            </>
      );
}

export default ExploreTests;