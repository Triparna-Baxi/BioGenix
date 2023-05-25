//Frontend for Navigation bar
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function NavBar() {
      return (
            <div className={styles.headerStyle}>
                  <nav className="navbar fixed-top navbar-light" style={{ backgroundColor: "white" }} >
                        <NavLink className="navbar-brand" to="/">
                              <img src="./logo192.png" width="270" height="60" className="d-inline-block align-top" alt="logo" style={{ paddingLeft: "20px" }} />
                        </NavLink>
                        <div>
                              <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                          <NavLink className="nav-link active" to="/" style={{ color: "black" }}>Home</NavLink>
                                    </li>
                                    <li className="nav-item dropdown" style={{ paddingTop: "1px" }}>
                                          <a className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href=".">
                                                Services
                                          </a>
                                          <ul className="dropdown-menu">
                                                <li><NavLink className="dropdown-item" to="/ExploreTests">Explore Tests</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/BookAppointment">Book Appointment</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/DownloadReport">Download Report</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/FAQPage">FAQs</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="/Feedback">Share Feedback</NavLink></li>
                                          </ul>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink
                                                className="nav-link active"
                                                to="/ContactUs"
                                                style={{ color: "black" }}
                                          >
                                                Contact Us
                                          </NavLink>
                                    </li>
                                    {/* <div id="profile" style={{ paddingRight: "20px", paddingTop: "5px", paddingLeft: "10px" }}>
                                                <svg xmlns="http://www.w3.org/2000svg" width="35" height="35" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" to="/">
                                                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg>
                                    </div> */}
                              </ul>
                        </div>

                  </nav>
            </div>
      );
}
export default NavBar;