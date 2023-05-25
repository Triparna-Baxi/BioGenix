//Frontend for Payment using razorpay
import React, {useState} from 'react'
import styles from "./styles.module.css";
import {Alert, Button, Snackbar} from "@mui/material";
const url = "http://localhost:5000";

function Payment() {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [status, setStatus] = useState(false);
  const [trueContact, setTrueContact] = useState(true)
  const handleClose = () => {
    setStatus(false);
    setTrueContact(true)
  };



  //function for loading script tag with source src in frontend
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  // for displaying razorpay pop up
  async function displayRazorpay() {

    if (contact.toString().length === 10) {
      setTrueContact(true);
      // loading script with razorpay's given api for frontend for getting Razorpay object
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
      }

      //getting orderid from backend
      const data = await fetch(url + "/api/checkout/razorpay/" + amount.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify({
          amount: amount.toString(),
          email:email
        })
      }).then((t) =>
          t.json()
      )

      const options = {
        "key": "rzp_test_aqRrSZmCJ6Z4pC", // Enter the Key ID generated from the Dashboard
        "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paisa
        "currency": data.currency,
        "name": "MyPay",
        "description": "Test Transaction",
        "image": url + "/logo.svg",
        "order_id": data.id,
        "handler": async function (response) {

          console.log(response)
          fetch(url + '/api/checkout/verification/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify({
              status: true,
              oid: data.id
            })
          }).then(function (response1) {
            console.log(response1)
          });
          setStatus(true);
          alert("payment has done ")

        },
        "prefill": {
          "name": name,
          "email": email,
          "contact": "" + contact
        },
        "notes": {
          "address": "MyPay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    } else {
      setTrueContact(false);
    }


  }

  return (
    <>
      <div className={styles.paymentBlock}>
        <heading>Payment</heading>
        <text>Confirm your Appointment!!!</text>
        <header className="App-header">
          <form>
            <table>
              <tr>
                <td>
                  <label className={styles.name}>Enter your Name:<span/>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.cont}
                    />
                  </label>
                </td>
              </tr>
              <tr>
                <td><label className={styles.email}>Enter your Email:<span/>
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.cont}
                  />
                </label></td>
              </tr>
              <tr>
                <td><label className={styles.amount}>Enter your Amount:<span/>
                  <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className={styles.cont}
                  />
                </label></td>
              </tr>
              <tr>
                <td><label className={styles.phone}>Enter your contact:<span/>
                  <input
                      type="number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className={styles.cont}
                  />
                </label></td>
              </tr>
            </table>
            <br/>

            <Button sx={{
              bgcolor: '#0f667d',
              position: 'absolute',
              width: '170px',
              height: '49px',
              left: '250px',
              top: '520px',
              background: '#3073D9',
              boxShadow: '(0,4 ,4), rgba(0: 0: 0: 0.25)',
              borderRadius: '105px',
            }} variant="contained" onClick={displayRazorpay}>
              <label className={styles.proceedText}>Pay</label></Button>

          </form>

        </header>

        <Snackbar open={status} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
            Transaction completed
          </Alert>
        </Snackbar>
        <Snackbar open={!trueContact} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
            Contact was wrong
          </Alert>
        </Snackbar>
      </div>

    </>
  )
}
export default Payment;