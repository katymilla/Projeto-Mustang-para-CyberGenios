import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

export const About = () => {
    return (
        <div className="about">
            <Container id='aboutdesktop'>
                <Row>
                    <Col>

                    </Col>
                    <Col id='borrao'>
                        <h1>Mustang</h1>
                        <p>O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.</p>
                        <Button>Ver carros</Button>
                    </Col>
                </Row>
            </Container>
            <Container id='aboutmobile'>
                <Row>
                    <Col id='borrao'>
                        <h1>O que são?</h1>
                        <p>O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao longo dos anos é a mais antiga linha de automóveis da Ford.</p>
                        <Button>Ver carros</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <br/><br/><br/><br/><br/><br/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
