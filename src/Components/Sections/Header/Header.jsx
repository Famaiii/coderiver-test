import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from '../Header/Header.module.css';
import Buy from '../../../images/buy.svg';
import { gsap } from 'gsap';


const Header = () => {
    const headerNavRefs = useRef([]);

    useEffect(() => {
        let timeline = gsap.timeline();

        headerNavRefs.current.forEach((ref) => {
            const headerNavs = gsap.fromTo(
                ref,
                { y: -130 },
                {
                    duration: 0.5,
                    y: 0,
                    stagger: 0.1,
                }
            );
            timeline.add(headerNavs);
        });
    }, []);

    return (
        <header className={classes.headerHeader}>
            <Container>
                <Row>
                    <Col lg={4} ref={(el) => (headerNavRefs.current[0] = el)}>
                        <h1 className={classes.landing}>Landing</h1>
                    </Col>
                    <Col
                        ref={(el) => (headerNavRefs.current[1] = el)}
                        className={classes.headerNav}
                    >
                        Clothes
                    </Col>
                    <Col
                        ref={(el) => (headerNavRefs.current[2] = el)}
                        className={classes.headerNav}
                    >
                        Sneakers
                    </Col>
                    <Col
                        ref={(el) => (headerNavRefs.current[3] = el)}
                        className={classes.headerNav}
                    >
                        Bags
                    </Col>
                    <Col
                        ref={(el) => (headerNavRefs.current[4] = el)}
                        className={classes.headerNav}
                    >
                        Accessorize
                    </Col>
                    <Col
                        ref={(el) => (headerNavRefs.current[5] = el)}
                        className={classes.buy}
                    >
                        <img src={Buy} alt='buy' width={100} height={100} />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
