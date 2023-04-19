import { React, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from '../Main/Main.module.css';

import Android from '../../../images/android.svg';
import Apple from '../../../images/apple.svg';
import Vector from '../../Vector';
import Text from '../Text/Text';
import Slider from '../Slider/Slider';

import { gsap } from 'gsap';

const Main = () => {
    const mobileIconsRef = useRef([]);
    const textAnimateRef = useRef([]);

    useEffect(() => {
        let timeline = gsap.timeline();

        const mobileIcons = gsap.fromTo(
            mobileIconsRef.current,
            { x: -100 },
            {
                duration: 1,
                x: 0,
            }
        );

        const textAnimate = gsap.fromTo(
            textAnimateRef.current,
            { x: 100 },
            { duration: 1, x: 0 }
        );

        timeline.add(mobileIcons, textAnimate);
    }, []);

    return (
        <section className={classes.main}>
            <div className={classes.svg}>
                <Vector />
            </div>
            <div className={classes.wrapper}>
                <Container>
                    <Row>
                        <Col lg={6} ref={mobileIconsRef}>
                            <div className={classes.mobileIcons}>
                                <img
                                    className={classes.apple}
                                    src={Apple}
                                    alt='Apple'
                                    width={55}
                                    height={55}
                                ></img>
                                <img
                                    className={classes.android}
                                    src={Android}
                                    alt='Android'
                                    width={55}
                                    height={55}
                                ></img>
                                <p className={classes.sectionText}>
                                    App avaliable
                                </p>
                            </div>

                            <div className={classes.mainHeader}>
                                CHOOSE YOUR WINTER{' '}
                                <span className={classes.look}>
                                    LOOK<sup>*</sup>
                                </span>{' '}
                                APPAREL
                            </div>
                        </Col>
                        <Col lg={6} ref={textAnimateRef}>
                            <Text />
                        </Col>
                    </Row>
                    <Row>
                        <Slider />
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Main;
