
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
              <h1>Upcoming</h1>
            </Row>


          
          </Container>
          <div className='courses'>
            <img src='https://devskill.com/img/bg_upcoming_left.svg'></img>
    
            <Container className='courses-body'>
           
              <Card style={{
                width: '37rem', height: '36rem'
              }}>

                <Card.Body className='card'>
                  <Row>
                    <Col className='course-left' lg="2">
                      <img src='https://devskillpublicfiles.s3.ap-southeast-1.amazonaws.com/uploads/websiteimages/coursecontents/21xwzm0jtfj.png' style={{ width: '7rem' }}></img>
                    </Col>
                    <Col className='course-right' lg="10">
                      <h5> UI and UX Design for APP and Website </h5>
                      <div></div>
                      <p className='course-dec'>This course has been designed with effective practical components that makes you a professional/ commercial UI designer. From the Information architecture to Sketch to Wireframe to prototype and UI de... </p>
                      <Row>
                        <Col>
                          <p className='red'>Tk. 15,000</p>
                        </Col>
                        <Col>

                          <p>Tk. 12,000</p>
                        </Col>
                      </Row>
                      <p className='red red2'>20% discount offer valid for 2 more days only</p>
                      <Row>
                        <Col>
                          <p>Registration</p>
                          <p className='bold'>2 Days Remaining</p>
                          <p> 16 people already registered</p>
                        </Col>
                        <Col>
                          <p>Schedule</p>
                          <p className='bold bold2'> Sun and Tue 09:00 PM - 11:00 PM </p>
                          <p> Starts from May 10, 2022 </p>
                        </Col>
                      </Row>
                      <div className='course-bottom course-bottom1'>
                        <Button>Register Now</Button>
                        <Button>See Details</Button>
                      </div>
                    </Col>
                  </Row>


                </Card.Body>
              </Card>


              <Card style={{
                width: '37rem', height: '30rem'
              }} className="card2">

                <Card.Body className='card '>
                  <Row>
                    <Col className='course-left' lg="2">
                      <img src='https://devskillpublicfiles.s3.ap-southeast-1.amazonaws.com/uploads/websiteimages/coursecontents/jc0jhhgdckh.png' style={{ width: '7rem' }}></img>
                    </Col>
                    <Col className='course-right' lg="10">
                      <h5>  Web Application Development with Laravel  </h5>
                      <div></div>
                      <p className='course-dec'>বর্তমানে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট এর একটি জনপ্রিয় ও বহুল ব্যবহৃত ফ্রেমওয়ার্ক হলো লারাভেল। অনেকেই বেসিক না জেনে এবং এলোমেলোভাবে শেখার কারণে বেশি দূর আগাতে পারেনা। আমাদের এই কোর্সটি এর মাধ্যমে একজন...  </p>
                      <Row>
                        <Col>
                          <p className='bold'>Tk. 12,000</p>
                        </Col>
                        <Col>

                          <p></p>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <p>Registration</p>
                          <p className='bold'>2 Days Remaining</p>
                          <p> 14 people already registered</p>
                        </Col>
                        <Col>
                          <p>Schedule</p>
                          <p className='bold bold2'> Mon and Wed 09:00 PM - 11:00 PM  </p>
                          <p> Starts from May 16, 2022  </p>
                        </Col>
                      </Row>
                      <div className='course-bottom'>
                        <Button>Register Now</Button>
                        <Button>See Details</Button>
                      </div>
                    </Col>
                  </Row>


                </Card.Body>
              </Card>



            </Container>
          </div>


        </div>



      </div>
    )
  }
}
