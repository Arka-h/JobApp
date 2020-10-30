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
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import axios from 'axios'

const CreateJob = (props) => {
  const [jobName, setJobName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const createJob = () => {
    if (jobName === "") alert("Fill the Job Name !");
    else if (description === "") alert("Fill the description !");
    else
      axios(
        {
          method: "POST",
          data: {
            JobName: jobName,
            Description: description,
          },
          withCredentials: true,
          url: "http://localhost:4000/create-job",
        }).then(()=>{
          window.location='/user/jobs'
        })
  };

  return (
    <>
    
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add a Job</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {/* <Button onClick={()=>{this.test()}}>
                    Update the classes
                  </Button> */}
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Job Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Job Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-firstname"
                            placeholder="Job Name "
                            onChange={(e) => setJobName(e.target.value)}
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
                            Company
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-lastname"
                            placeholder="Company Name"
                            value={props.auth.company}
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            placeholder="Job Description"
                            rows="4"
                            type="textarea"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      color="primary"
                      onClick={() => {
                        createJob();
                      }}
                      block
                    >
                      Create Job
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, actions)(CreateJob);
