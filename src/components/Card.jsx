import React from 'react';
import FormattedPhoneNoButton from './FormattedPhoneNoButton.jsx';

function Card ({ name, job, phone, photo }) {
                                              const { formattedPhoneNo, handlePhoneNumberButtonClick } = FormattedPhoneNoButton({ phone });

                                              return (
                                                <div>
                                                  <div className="cardPage">
                                                    <div className="card">
                                                      <img src={require(`./image/${photo}`)} alt="" />
                                                      <div className="content">
                                                        <h1>Name: {name}</h1>
                                                        <h2>Job: {job}</h2>
                                                        <h3>Phone: {phone}</h3>
                                                        <button onClick={handlePhoneNumberButtonClick}>Format phone no.</button>
                                                        <p>Formatted Phone: {formattedPhoneNo}</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            };

export default Card;