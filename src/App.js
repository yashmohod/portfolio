import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useRef, useState } from 'react';
import AnzenPhotos from "./Components/AnzenPhotos/AnzenPhotos"
import ClockPhotos from './Components/ClockPhotos/ClockPhotos';
import Box from './Components/Visual/Box';

function App() {


  const [showAnzen, setShowAnzen] = useState(false);
  const [showClock, setShowClock] = useState(false);




  useEffect(() => {
    const handleMouseMove = (event) => {
      let btn = document.querySelector('.mouse-cursor-gradient-tracking');
      btn.style.setProperty('--x', event.clientX + 'px');
      btn.style.setProperty('--y', event.clientY + 'px');
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className='App'>
      <div className="mouse-cursor-gradient-tracking">
        <Container fluid>
          <Row>
            <Col lg={1}>
            </Col>
            <Col md={5} lg={5}>
              <div className='introholder'>
                <div className='intro'>
                  <h2>Hi, my name is Yash.</h2>

                  <p>
                    I am a curious software developer and physicis.
                  </p>
                </div>
                <div className='cavasHolder'>
                  <Box />
                </div>
              </div>
            </Col>
            <Col md={7} lg={6}>
              <div className='rightcol'>
                <div className='education'>
                  <h3>
                    Education
                  </h3>
                  <div className='educationText'>
                    <p>
                      Ithaca College (2021 - 2025)
                    </p>
                    <p>
                      Majors: Computer Science, Physics
                    </p>
                  </div>
                </div>
                <div className='projects'>
                  <h3>
                    Projects
                  </h3>

                  <div className='project'>
                    <Row>
                      <Col xxl={5}>
                        <div className='pics'>
                          <h3>Anzen</h3>
                          <img src="Media/anzen/anzen.png" onClick={() => setShowAnzen(true)} />
                        </div>
                      </Col>
                      <Col xxl={7}>
                        <div className='description'>
                          <p>
                            This is a web-application I had developed for <a href='https://www.ithaca.edu/public-safety-and-emergency-management/student-auxiliary-safety-patrol'>SASP</a> for data logging and time card management.
                          </p>
                          <p>
                            Webstack: React Flask SQLAlchemy
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>



                  <div className='project'>
                    <Row>
                      <Col xxl={5}>
                        <div className='pics'>
                          <h3 > <a href='https://yashmohod.github.io/lili'>Clock</a></h3>
                          <img src="Media/clock/c1.png" onClick={() => setShowClock(true)} />
                        </div>
                      </Col>
                      <Col xxl={7}>
                        <div className='description'>
                          <p>
                            Quick react crash course project to make a clock.
                          </p>
                          <p>
                            Webstack: React
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>


                </div>
              </div>
            </Col>
          </Row>

        </Container >

        <AnzenPhotos showAnzen={showAnzen} setShowAnzen={setShowAnzen} />
        <ClockPhotos showAnzen={showClock} setShowAnzen={setShowClock} />



      </div>
    </div >


  );
}

export default App;
