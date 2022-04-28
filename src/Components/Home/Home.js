
import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import NavbarCom from '../Navbar/NavbarCom';
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <div>
        <header> <NavbarCom /></header>
        <div>
          <Container  >
            
            <Row className='top-content'>
              <Col className='top-left'>
                <h1 className='top-heading'>All you need to be a good <br></br> software engineer</h1>
                <Button className='d-btn'>Become a Member</Button>
                <p> Get latest news,course updates related to software engineering </p>
              </Col>
              <Col className='top-right'>
              <img src='https://i.ibb.co/X7bjnDm/Screenshot-2.png'></img>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    )
  }
}
