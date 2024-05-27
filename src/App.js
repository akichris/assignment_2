import './App.css';
import Card from "./components/Card.jsx";

function App() {
                  const personData =  [
                                        {
                                          name: 'Boss Baby',
                                          job: 'Boss',
                                          phone: '0123456789',
                                          photo: 'BossBaby.png'
                                        },
                                        {
                                          name: 'Staff Baby',
                                          job: 'Staff',
                                          phone: '1234567890',
                                          photo: 'StaffBaby.png'
                                        },
                                        {
                                          name: 'Teacher Baby',
                                          job: 'Teacher',
                                          phone: '2345678901',
                                          photo: 'teacherBaby.png'
                                        },
                                        {
                                          name: 'Angry Baby',
                                          job: 'Baby',
                                          phone: '3456789012',
                                          photo: 'AngryBaby.jpg'
                                        },
                                      ];

                  return  (
                            <div className="App">
                              {personData.map((person, index) =>  (
                                                                    <Card
                                                                      key={index}
                                                                      name={person.name}
                                                                      job={person.job}
                                                                      phone={person.phone}
                                                                      photo={person.photo}
                                                                    />
                                                                  )
                                              )
                              }
                            </div>
                          );
                }

export default App;