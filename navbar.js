import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';

export const Header = () => {
  function show() {
    var x = document.getElementById("toggleicon");
    var y = document.getElementById("toggleicon2");
    x.style.display = 'none'
    y.style.display = 'block'
  }
  function hidde() {
    var x = document.getElementById("toggleicon");
    var y = document.getElementById("toggleicon2");
    x.style.display = 'block'
    y.style.display = 'none'
  }
  return (
    <Container>
      <span id='logohome'></span>
      <Navbar id="navbg" bg="none" expand="lg" variant="dark">
        <Navbar.Toggle id="toggleicon" aria-controls="basic-navbar-nav" onClick={show} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggleicon2" onClick={hidde} />
          <Nav>
            <Nav.Item className='navgation' ><Nav.Link className='homelink' href="#home">Home</Nav.Link></Nav.Item>
            <Nav.Item className='navgation'><Nav.Link href="#about">Sobre</Nav.Link></Nav.Item>
            <Nav.Item className='navgation'><Nav.Link href="#tables">Tabelas</Nav.Link></Nav.Item>
            <Nav.Item id='navgationB' className='navgation'><Nav.Link href="#contact">Fale Conosco</Nav.Link></Nav.Item>
            <Nav.Item id='navgationC' className='navgation'><Nav.Link href="#">Entrar&emsp;&emsp;<Icon id='charmperson' icon="charm:person" color="white" /></Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
