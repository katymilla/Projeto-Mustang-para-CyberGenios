import { Icon } from '@iconify/react';
import React from 'react';
import { Container, Col, Row, Carousel, Card, Button } from 'react-bootstrap';
function gerarColunaCarro(title, img, year, kmph, nota1, nota2) {
  return (
    <Card className='cardborder'>
      <Card.Img className='cardimg' variant="top" src={img} />
      <Card.Body className='cardbody'>
        <Card.Title className='cardtitle'>{title}</Card.Title>
        <Card.Text>
          <ul>
            <li className='cardlist'>
              <Icon icon="bi:calendar-date" color="#1d2527" inline={true} className="cardicon" /> <p className='textcard'>{year}</p>
            </li>
            <li className='cardlist'>
              <Icon icon="fluent:top-speed-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>{kmph} km/h</p>
            </li>
            <li className='cardlist'>
              <Icon icon="simple-line-icons:energy" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>{nota1}/10</p>
            </li>
            <li className='cardlist'>
              <Icon icon="fluent:people-20-regular" color="#1d2527" className="cardicon" inline={true} /> <p className='textcard'>{nota2}/10</p>
            </li>
          </ul>
        </Card.Text>
        <Button variant="light" className='buttoncard'>Ver carro</Button>
      </Card.Body>
    </Card>
  )
}
export const Tabelas = () => {
  return (
    <div className="tables">
      <Container id='tables'>
        {/* DESKTOP */}
        <Carousel id='desktopcarousel'>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>{gerarColunaCarro('Mustang 1', '/images/cars/mustang_PNG1.png', '2015', 180, 9, 8)}</Col>
                <Col>{gerarColunaCarro('Mustang 2', '/images/cars/mustang_PNG2.png', '2016', 180, 9, 8)}</Col>
                <Col>{gerarColunaCarro('Mustang 3', '/images/cars/mustang_PNG3.png', '2017', 180, 9, 8)}</Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>{gerarColunaCarro('Mustang 4', '/images/cars/mustang_PNG4.png', '2015', 180, 9, 8)}</Col>
                <Col>{gerarColunaCarro('Mustang 5', '/images/cars/mustang_PNG5.png', '2016', 180, 9, 8)}</Col>
                <Col>{gerarColunaCarro('Mustang 6', '/images/cars/mustang_PNG6.png', '2017', 180, 9, 8)}</Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                <Col>{gerarColunaCarro('Mustang 7', '/images/cars/mustang_PNG7.png', '2015', 180, 9, 8)}</Col>
                <Col>{gerarColunaCarro('Mustang 8', '/images/cars/mustang_PNG8.png', '2016', 180, 9, 8)}</Col>
                <Col>{gerarColunaCarro('Mustang 9', '/images/cars/mustang_PNG9.png', '2017', 180, 9, 8)}</Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>

        {/* MOBILE */}
        <Carousel id='mobilecarousel'>
          <Carousel.Item>{gerarColunaCarro('Mustang 1', '/images/cars/mustang_PNG1.png', '2015', 180, 9, 8)}</Carousel.Item>
          <Carousel.Item>{gerarColunaCarro('Mustang 2', '/images/cars/mustang_PNG2.png', '2016', 180, 9, 8)}</Carousel.Item>
          <Carousel.Item>{gerarColunaCarro('Mustang 3', '/images/cars/mustang_PNG3.png', '2017', 180, 9, 8)}</Carousel.Item>
          <Carousel.Item>{gerarColunaCarro('Mustang 4', '/images/cars/mustang_PNG4.png', '2015', 180, 9, 8)}</Carousel.Item>
          <Carousel.Item>{gerarColunaCarro('Mustang 5', '/images/cars/mustang_PNG5.png', '2016', 180, 9, 8)}</Carousel.Item>
          <Carousel.Item>{gerarColunaCarro('Mustang 6', '/images/cars/mustang_PNG6.png', '2017', 180, 9, 8)}</Carousel.Item>
          <Carousel.Item>{gerarColunaCarro('Mustang 7', '/images/cars/mustang_PNG7.png', '2015', 180, 9, 8)}</Carousel.Item>
          <Carousel.Item>{gerarColunaCarro('Mustang 8', '/images/cars/mustang_PNG8.png', '2016', 180, 9, 8)}</Carousel.Item>
          <Carousel.Item>{gerarColunaCarro('Mustang 9', '/images/cars/mustang_PNG9.png', '2017', 180, 9, 8)}</Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
