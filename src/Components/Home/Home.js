
import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
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

            <Row className='skills'>
              <h1>Why Dev Skill?</h1>
              <Col>
                <h3 className='one'>Experienced Instructors</h3>
                <p>With more than 10 years of experience of working in the IT <br></br> industry, we intend to share with you what works </p>
              </Col>
              <Col>
                <h3 className='two'>Career Guidance</h3>
                <p>
                  You will be guided to prepare yourself for the IT industry
                </p>
              </Col>
              <Col>
                <h3 className='three'>Online</h3>
                <p>
                  No need to waste time in traffic jam. A good internet  connection is all you need to start learning!
                </p>
              </Col>

            </Row>

            <Row className='skills'>
              <Col>
                <h4>Over 13935 students from multiple renowned universities and institutions across the country attended courses/contests </h4>
              </Col>
              <Col>
                <img src='https://devskill.com/img/students.png'></img>
              </Col>
            </Row>
            <Container className='courses-body'>
              <h1>Upcoming</h1>
              <Card style={{ width: '36rem', height: '36rem'
             }}>

                <Card.Body className='card'>
                  <Row>
                    <Col className='course-left' >
                      <img src='https://devskillpublicfiles.s3.ap-southeast-1.amazonaws.com/uploads/websiteimages/coursecontents/21xwzm0jtfj.png'></img>
                    </Col>
                    <Col >
                    <h5> UI and UX Design for APP and Website </h5>
                    <div></div>
                    <p>This course has been designed with effective practical components that makes you a professional/ commercial UI designer. From the Information architecture to Sketch to Wireframe to prototype and UI de... </p>
                    </Col>
                  </Row>

                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


          
            </Container>

          </Container>

        </div>
        <div className='courses'>
          <img src='https://devskill.com/img/bg_upcoming_left.svg'></img>

        </div>

      </div>
    )
  }
}
