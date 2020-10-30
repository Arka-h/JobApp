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
import login from "../../actions/login"
// reactstrap components
import {
  FormText,
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";

function Login () {
  
  const [loginUsername,setLoginUsername] = React.useState("")
  const [loginPassword,setLoginPassword] = React.useState("")
  const [alertMessage,setMessage]=React.useState("")

    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Log in with credentials</small>
              </div>
              <Form role="form">
              <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="text" autoComplete="new-username" onChange={e=> setLoginUsername(e.target.value)}/>  {/*This is the username*/}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" onChange={e => setLoginPassword(e.target.value)}/> {/*This is the password*/}
                  </InputGroup>
                  <FormText color="danger" className="text-center">
                  {alertMessage}
                </FormText>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={()=>{login(loginUsername,loginPassword,setMessage)}}>
                    Log in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
export default Login;
