//Static Frontend for FAQ
import React from 'react';
import styles from "./styles.module.css";
function FAQs() {
      return (
            <>
                  <label className={styles.title}>
                        Frequently Asked Questions
                  </label>
                  <div className={styles.pgFormat}>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                              <div className="accordion-item my-3">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                <strong>What are the symptoms of 2019-Novel CoronaVirus?</strong>
                                          </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                          <div className="accordion-body">
                                                Possible symptoms include:
                                                <ul>Fever or chills</ul>
                                                <ul>Cough</ul>
                                                <ul>Shortness of breath or difficulty breathing</ul>
                                                <ul>Fatigue</ul>
                                                <ul>Muscle or body aches</ul>
                                                <ul>Headache</ul>
                                                <ul>New loss of taste or smell</ul>
                                                <ul>Sore throat</ul>
                                                <ul>Congestion or runny nose</ul>
                                                <ul>Nausea or vomiting</ul>
                                                <ul>Diarrhea</ul>
                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item my-3">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                <strong>How do I download my report?</strong>
                                          </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                          <div className="accordion-body">
                                                You can download your report from website using your unique reciept ID and password of your login.
                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item my-3">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                <strong>By when can I get my report?</strong>
                                          </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                          <div className="accordion-body">
                                                After getting tested in lab and doing payment, the patient will obtain
                                                a notification on registered email id regarding the report.
                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item my-3">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                <strong>How can I visit Biogenix Lab and get tested myself?</strong>
                                          </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                          <div className="accordion-body">
                                                To visit lab physically one can visit contact us page of
                                                website to get the location of lab. For further detais and queries, one can
                                                drop message on contact us page.
                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item my-3">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                <strong>What documents are needed for COVID-19 testing?</strong>
                                          </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                          <div className="accordion-body">
                                                Patient must require Goverment ID to support current address and contact details
                                                at the time of sample collection.
                                          </div>
                                    </div>
                              </div>
                              <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingSix">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                <strong>What kind of tests are available?</strong>
                                          </button>
                                    </h2>
                                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                          <div className="accordion-body">
                                                There are multiple tests available. One can go for individual tests or can opt for test packages comprising of multiple tests related to that package.
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      )
}


export default FAQs;