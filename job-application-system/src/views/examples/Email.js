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
import * as actions from "../../actions";
import Axios from "axios";
import * as emailjs from "emailjs-com";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// Convert to functional component and Add refresh the data,
// Write an axios callback to update the required fields,
// through the profile update route on backend

// reactstrap components

// core components
import Header from "components/Headers/Header";
import UserHeader from "components/Headers/UserHeader.js";
import axios from "axios";

const ObjectId = require("mongodb").ObjectID;


class Email extends React.Component {
  state = {
    subject: "",
    message: "",
    from_email: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    // `${this.props.auth.name['firstName']} ${this.props.auth.name['lastName']},${this.props.auth.company}`
    // this.props.id
    // console.log(this.props.match.params.id,this.props.match.params.jobname)
    const resume = this.props.auth.Jobs.find(job => { if(job.JobName===this.props.match.params.jobname) 
      return true 
  else 
      return false
  }).Resumes.find(resume=>{
    if (resume._id === this.props.match.params.id)
      return true
    else
      return false
  })
  console.log(resume)

    

let templateParams = {
      from_name: this.props.auth.company,//done
      to_email: resume.emailCan,
      to_name: `${resume.nameCan.firstName} ${resume.nameCan.lastName}`,
      subject: this.state.subject,
      message_html: this.state.message,
      from_email: this.props.auth.email,//done
    };
    // emailjs.sendForm('recruiter_email', 'template_1dl5cvg', templateParams, 'user_HIvH1cpTFchEJ2aS8dDfZ')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    emailjs.send(
      "recruiter_email",
      "template_1dl5cvg",
      templateParams,
      "user_HIvH1cpTFchEJ2aS8dDfZ"
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      subject: "",
      message: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <>
      <Header flag={false} />
        <Container className="mt--7" fluid>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0"> Write an Email Response</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                
                  <Form onSubmit={this.handleSubmit.bind(this)}>
                    {/* <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup> */}
                    {/* <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup> */}
                    <FormGroup controlId="formBasicSubject">
                      <Label className="text-muted ml-2">Subject</Label>
                      <Input
                        type="text"
                        name="subject"
                        className="text-primary ml-2"
                        value={this.state.subject}
                        onChange={this.handleChange.bind(this, "subject")}
                        placeholder="Subject"
                      />
                    </FormGroup>
                    <FormGroup controlId="formBasicMessage">
                      <Label className="text-muted ml-2">Message</Label>
                      <Input
                        type="textarea"
                        name="message"
                        className="text-primary ml-2"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this, "message")}
                      />
                    </FormGroup>
                    <Button variant="primary" type="submit" className="ml-2 mb-2 text-center">
                      Submit
                    </Button>
                  </Form>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(Email);
