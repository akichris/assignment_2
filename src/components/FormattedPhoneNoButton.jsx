import { useState } from 'react';

function PhoneNumberHandler({ phone }) {
                                          const [formattedPhoneNo, setPhoneNumber] = useState('');

                                          const formatPhoneNumber = (value) => {
                                                                                  
                                                                                  const formattedNumber = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) -$2-$3');
                                                                                  return formattedNumber;
                                                                                };

                                          const handlePhoneNumberButtonClick = () =>  {
                                                                                        const formattedPhoneNumber = formatPhoneNumber(phone);
                                                                                        setPhoneNumber(formattedPhoneNumber);
                                                                                      };

                                          return {
                                                    formattedPhoneNo,
                                                    handlePhoneNumberButtonClick,
                                                  };
                                        };

export default PhoneNumberHandler;
