import React from 'react';
import { Header } from '../componets/navbar';
import { Container, Col, Row, Image } from 'react-bootstrap';

export const Home = () => {
    return (
        <div className="home">
            <Container id='home'>
                <Row>
                    <Col>
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>MUSTANG</h1>
                        <Image id='mustanghome' src='/images/cars/mustang_PNG0.png' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
