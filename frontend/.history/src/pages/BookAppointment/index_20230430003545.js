//Frontend for Booking appointment
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useContext } from "react";
import { cartContext } from "../../CartProvider";

function BookAppointment() {
    const {cart,total} = useContext(cartContext);
    const [date, setDate] = useState(new Date());
    const [test, setTest] = useState([
        {
            _id: "",
            name: "",
            price: 0,
            __v: 0
        }

    ])
    const [formData, setFormData] = useState({
        doorToDoor: "",
        email: "",
        name: "",
        test: "",
        streetAddress: "",
        roadNo: "",
        city: "",
        state: "",
        pincode: "",
    });

    const onChange = (date) => {
        setDate(date);
    };
    useEffect(async () => {
        async function fetchData() {
            try {
                const url = "http://localhost:5000/api/tests/getTest";
                const tempTest = await axios.post(url);
                // setTest([...test, ...[tempTest.data]]);
                tempTest.data.map((e) => {
                    // alert(e.name)
                    setTest([...test, e])
                })

            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
                    console.log(error);
                }
            }
        }

        await fetchData();
    }, [])
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevState) => ({...prevState, [name]: value}));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(formData.name);

        // handle form submission logic here
        let address = formData.streetAddress + ", " + formData.roadNo + ", " + formData.city + ", " + formData.pincode + ", " + formData.state
        let sendData = {
            "address": address,
            "name": formData.name,
            "email": formData.email,
            "date": date,
            "dtd": formData.doorToDoor,
            "test": formData.test
        }
        if(localStorage.getItem("cart")) {
            const existingCart = JSON.parse(localStorage.getItem("cart"));
            existingCart.push(sendData);
        }
        else{
            cart.current.push(sendData);
            localStorage.setItem("cart", JSON.stringify(cart.current));
        }
        try {

            const url = "http://localhost:5000/api/appointment/bookAppointment";

            const {data: res} = await axios.post(url, sendData);

            localStorage.setItem("token", res.data);
            
            window.location = "/payment";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {

                console.log(error)
            }
        }
    };

    return (
        <>
            <title>Book Appointment</title>
            {/* <h1 className={styles.heading}>Book an Appointment</h1> */}
            <text className={styles.text}>Let’s see when you can get tested!!</text>

            <div className={styles.cal}>
                <Calendar onChange={onChange} value={date}/>
            </div>
                              <div>
                        <label className={styles.booked}>Booked</label>
                        <div className={styles.bookedLabel} />

                        <label className={styles.avail}>Available</label>
                        <div className={styles.availableLabel} />

                        <label className={styles.holiday}>Holiday</label>
                        <div className={styles.holidayLabel} />
                  </div>


        <div className={styles.dataBlock}>
            <div className={styles.subBlock}>
            
            <form onSubmit={handleSubmit}>
                    <form>
                    <label className={styles.heading} htmlFor="doorToDoor">
                        Want door-to-door service?
                    </label>
                        <label htmlFor="yes" className={styles.yes} >
                            <input
                                className={styles.yesRadio}
                                type="radio"
                                id="yes"
                                name="doorToDoor"
                                value="yes"
                                checked={formData.doorToDoor === "yes"}
                                onChange={handleInputChange}
                            />
                            Yes
                        </label>
                        <label htmlFor="no" className={styles.no}>
                            <input
                                className={styles.noRadio}
                                type="radio"
                                id="no"
                                name="doorToDoor"
                                value="no"
                                checked={formData.doorToDoor === "no"}
                                onChange={handleInputChange}
                            />
                            No
                            </label>
                    </form>
                    <label7  htmlFor="name">
                        Your name:
                    </label7>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.yourname}
                    />
                    
                    <label8  htmlFor="email">
                        Your email:
                    </label8>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.youremail}
                    />
                

                
                    <label1 htmlFor="test">
                        Select Test:
                    </label1>
                    <select name="test" id="test" value={formData.test} onChange={handleInputChange} className={styles.testtb}>

                        {test.map(e=> {
                            return (<option value={e.name}>{e.name}</option>);
                        })}


                    </select>
                    
                
                    <label2  htmlFor="streetAddress">
                        Street Address:
                    </label2>
                    <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        className={styles.streettb}
                    />
                

                
                    <label3  htmlFor="roadNo">
                        Apt. no., Road name:
                    </label3>
                    <input
                        type="text"
                        id="roadNo"
                        name="roadNo"
                        value={formData.roadNo}
                        onChange={handleInputChange}
                        className={styles.roadNotb}
                    />
                
                
                    <label4  htmlFor="city">
                        City:
                    </label4>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={styles.citytb}
                    />
                

                
                    <label5  htmlFor="state">
                        State:
                    </label5>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={styles.statetb}
                    />
                

                
                    <label6  htmlFor="pincode">
                        Pincode:
                    </label6>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className={styles.pincodetb}
                    />
                

                <div className={styles.btn}>
                    <button className={styles.confirmBtn} type="submit">
                        <text className={styles.confirm}>Book Appointment</text>
                    </button>
                </div>
            </form>
            </div>
            </div>

            <div className={styles.links}>
                <Link to="/">Go back to home</Link>
            </div>
        </>
    );
}

export default BookAppointment;
