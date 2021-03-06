import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
     <div>
            <Container className='footer'>
            <Row>
              <Col>
                <h6>STUDENTS</h6>
              </Col>
              <Col>
                <h6>MENTORS</h6>
              </Col>
              <Col>
                <h6>Terms</h6>
              </Col>
              <Col>
                <h6>CONTACT</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href='#'> <h5>Courses</h5></a>
                <a href='#'> <h5>Blog</h5></a>
                <a href='#'> <h5>Earn Dev Coins</h5></a>

              </Col>
              <Col>
                <a href='#'> <h5>Become an Instructor</h5></a>
                <a href='#'> <h5>Earn Dev Coins</h5></a>
              </Col>
              <Col>
                <a href='#'> <h5>Terms and Conditions</h5></a>
                <a href='#'> <h5>Privacy Policy</h5></a>
                <a href='#'> <h5>Refund Policy</h5></a>
              </Col>
              <Col>
                 <h6>Dev Skill</h6>
               <h6>House # 184 (8th Floor),
                  Senpara Parbata
                  Begum Rokeya Sarani, Mirpur-10
                  Dhaka 1216, Bangladesh</h6>
                <a href='#'> <h5>Open in google Map</h5></a>
                <a href='#'> <h5>+88 02 58050442-3</h5></a>
                <a href='#'> <h5>info@devskill.com</h5></a>
                <a href='#'> <h5>Contact us</h5></a>
              </Col>
            </Row>
            <Row className='footer-bottom'>
              <Col>© 2022 Dev Skill </Col>
              <Col>
              <a href='#'><h5> Find us on <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon> </h5></a>
              </Col>
            </Row>
          </Container>
     </div>
    )
  }
}

