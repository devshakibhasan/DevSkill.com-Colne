import React, { Component } from 'react'

import { Button, NavDropdown, Nav, NavbarBrand, Navbar, Form, Container, FormControl } from 'react-bootstrap';
import './NavbarCom.css'
export default class NavbarCom extends Component {
    render() {
        return (
            <div>
                <Navbar  expand="lg" className='navbar'>
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src='https://devskill.com/img/logo.png'></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mx-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1" className='navText' >COURSES</Nav.Link>
                                <Nav.Link href="#action2" className='navText'>BLOGS</Nav.Link>

                                <Nav.Link href="#" className='navText'>
                                    FAQ
                                </Nav.Link>
                            </Nav>

                            <Button variant="outline-success" className='button1'>Sign Up</Button>
                            <Button variant="outline-success"  className='button2'>Sign In</Button>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
