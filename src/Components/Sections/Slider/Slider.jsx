import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import classes from './Slider.module.css';

const images = [
    `${require('../../../images/slider-img-1.jpg')}`,
    `${require('../../../images/slider-img-2.jpg')}`,
    `${require('../../../images/slider-img-3.jpg')}`,
    `${require('../../../images/slider-img-1.jpg')}`,
    `${require('../../../images/slider-img-1.jpg')}`,
    `${require('../../../images/slider-img-1.jpg')}`,
];

const Slider = () => {
    return (
        <Container fluid className={classes.container}>
            <Row>
                <Col lg={12}>
                    <h1 className={classes.sliderHeader}>CHOOSE LOOKS</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Carousel
                        interval={null}
                        indicators={false}
                        prevIcon={
                            <span
                                aria-hidden='true'
                                className='carousel-control-prev-icon'
                            />
                        }
                        nextIcon={
                            <span
                                aria-hidden='true'
                                className='carousel-control-next-icon'
                            />
                        }
                    >
                        {[...Array(Math.ceil(images.length / 3))].map(
                            (_, index) => (
                                <Carousel.Item key={index}>
                                    <Row>
                                        {images
                                            .slice(index * 3, index * 3 + 3)
                                            .map((image, i) => (
                                                <Col lg={4} key={i}>
                                                    <img
                                                        className='d-block w-100'
                                                        src={image}
                                                        alt={`Slide ${
                                                            index * 3 + i + 1
                                                        }`}
                                                    />
                                                </Col>
                                            ))}
                                    </Row>
                                </Carousel.Item>
                            )
                        )}
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h1 className={classes.sliderHeader}>MORE ABOUT US</h1>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam sed enim sed libero commodo efficitur.
                            Suspendisse et lorem ac neque dictum pellentesque
                            nec sit amet nisl. Fusce rutrum quis purus ut
                            pretium. Vivamus ornare mauris non ligula egestas,
                            accumsan faucibus quam sollicitudin. Duis efficitur
                            lorem tellus. Aliquam non rhoncus felis, porttitor
                            consequat quam. Morbi gravida semper mattis. Nunc
                            ultrices justo in pulvinar convallis. Curabitur
                            dapibus ut tellus eu condimentum. Morbi vitae
                            convallis purus, ac finibus ipsum.
                            <br></br>
                            <br></br>
                            <br></br>
                            Suspendisse nec pharetra turpis. Aenean id nunc id
                            orci aliquam pulvinar eget vitae nisl. In ligula
                            neque, vestibulum vel arcu eu, eleifend vestibulum
                            tortor. Duis facilisis, est et aliquam dapibus, urna
                            mauris sagittis mi, et mattis metus magna vel
                            tellus. Phasellus sit amet volutpat ante, ut
                            condimentum lorem. Quisque auctor sollicitudin dui,
                            vitae egestas nunc suscipit et. Nullam eu quam sem.
                            Donec a nibh molestie, aliquam libero maximus,
                            feugiat velit. Curabitur ac accumsan velit. In hac
                            habitasse platea dictumst.
                        </p>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Slider;

