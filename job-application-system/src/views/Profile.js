/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { connect } from "react-redux";
import * as actions from '../actions';
// Convert to functional component and Add refresh the data, 
// Write an axios callback to update the required fields, 
// through the profile update route on backend

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import axios from 'axios'

class Profile extends React.Component {

  test = ()=>{
    axios.post("http://localhost:4000/test",{withCredentials:true})
  }
  render() {
    console.log(this.props.auth)
    return (
      <>
        <UserHeader />
        {/* <Button onClick={ ()=>{this.patch()} }>Test</Button> */}
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("assets/img/theme/17797.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    
                    
                  </div>
                </CardHeader>
                <CardBody className="pt-8 pt-md-4 pb-0 pb-md-4">
                    <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center md-2 mt-4">
                        <div>
                          <span className="heading">{ (this.props.auth.userType === undefined) ? "Unknown User" : this.props.auth.userType}</span> 
                        </div>
                      </div>
                    </div>
                    </Row>
                    <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">Username</span> 
                          <span className="description">{ this.props.auth.username }</span>
                        </div>
                        <div>
                          <span className="heading">Age</span> 
                          <span className="description">{ (this.props.auth.age === undefined) ? "No Age provided" : this.props.auth.age}</span>
                        </div>
                      </div>
                    </div>
                    </Row>
                    <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center">
                      <div>
                          <span className="heading">Email</span>
                          <span className="description">{ (this.props.auth.email === undefined) ? "No Email provided" : this.props.auth.email}</span>
                        </div>
                        <div>
                          <span className="heading">LinkedIn</span>
                          <span className="description">{ (this.props.auth.linkedin === undefined) ? "No LinkedIn provided" : this.props.auth.linkedin}</span>
                        </div>
                      </div>
                    </div>
                    </Row>
                    <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                        <span className="heading">Company</span>
                          <i className="ni education_hat mr-2" />
                          { (this.props.auth.company === undefined) ? "No Institution/Company provided" : this.props.auth.company}
                        </div>
                      </div>
                    </div>
                    </Row>
                    <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">Address</span> 
                          <span className="description">{ (this.props.auth.address === undefined) ? "No Address provided" : this.props.auth.address}</span>
                        </div>
                      </div>
                    </div>
                    </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">My Account</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* <Button onClick={()=>{this.test()}}>
                    Update the classes
                  </Button> */}
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      User Information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-firstname"
                              placeholder=" "
                              value={ (this.props.auth.name['firstName'] === undefined) ? null : this.props.auth.name['firstName']}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Last Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-lastname"
                              placeholder=" "
                              value={ (this.props.auth.name['lastName'] === undefined) ? null : this.props.auth.name['lastName']}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Username"
                              value = { this.props.auth.username }
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="email@adress.com"
                              value={ (this.props.auth.email === undefined) ? null : this.props.auth.email}
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Address"
                              rows="4"
                              type="textarea"
                              value={ (this.props.auth.address === undefined) ? null : this.props.auth.address}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-position"
                            >
                              Position
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-position"
                              placeholder={ (this.props.auth.position === undefined) ? "No Position provided" : this.props.auth.position}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-company"
                            >
                              Company
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-company"
                              placeholder={ (this.props.auth.company === undefined) ? "No Company provided" : this.props.auth.company}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({auth})=>({auth})

export default connect(mapStateToProps,actions)(Profile);
