
import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ClockPhotos.css"

function ClockPhotos(props) {
    function handleClose() {
        props.setShowAnzen(false);
    }
    return (
        <>
            <Modal show={props.showAnzen} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Anzen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='caruselDiv'>
                        <Carousel>
                            <Carousel.Item>
                                {/* <ExampleCarouselImage text="First slide" /> */}
                                <img src="Media/clock/c1.png" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <ExampleCarouselImage text="First slide" /> */}
                                <img src="Media/clock/c2.png" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <ExampleCarouselImage text="First slide" /> */}
                                <img src="Media/clock/c3.png" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                {/* <ExampleCarouselImage text="First slide" /> */}
                                <img src="Media/clock/c4.png" />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ClockPhotos;