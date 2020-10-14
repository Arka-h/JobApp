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
import Axios from 'axios';
import Login from './Login'
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
  Col, ButtonGroup
} from "reactstrap";

function Register (){
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [userName, setUserName] = React.useState("")
  const [password, setPassword] = React.useState("")     
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [choose, setChoose] = React.useState(
    {
      isCandidate:false,
      isEmployer:false
    })
  const [alertMessage1, setAlertMessage1] = React.useState("")
  const [alertMessage2, setAlertMessage2] = React.useState("")

  // Styling/UI functions
  

  // Main Functions
  const register = () => {

    const userType = choose.isCandidate ? 'Candidate' : choose.isEmployer? 'Employer' : null
    console.log(userType, this)
    if (userName==="")
      setAlertMessage1('Fill your Username !')
    else if(password=="" & confirmPassword=="")
      setAlertMessage1(`Enter password!`)
    else if(password !== confirmPassword )
      setAlertMessage1(`Passwords don't match!`)
    else if (firstName==="")
      setAlertMessage2('Fill your First Name !')
    else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)))
      setAlertMessage2('Enter valid Email ID !')
    else if (userType===null)
        setAlertMessage2('Choose a category !')  
      else
        Axios({
            method: 'POST',
            data: {
                username: userName,
                password: password,
                email: email,
                userType: userType,
                name:{
                  firstName : firstName,
                  lastName: lastName,
                },
                company: company
            },
            withCredentials: true,
            url: "http://localhost:4000/register"
        }).then((res)=>{
          console.log(res)
          if (res.data === "User Created"){
            (new Login()).login(userName,password)
          }
          else if(res.data === "User already exists")
            setAlertMessage2(`User Already Exists !`)
          else
            setAlertMessage2(`Registration Failed !`)
        })
      
      
  }
  
const setUserType = (e)=>{
  if (e.currentTarget.textContent === "Candidate")
    setChoose({
      isCandidate : true,
      isEmployer : false,
    })
  if(e.currentTarget.textContent === "Employer")
    setChoose({
      isCandidate : false,
      isEmployer : true,
    })
}
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Make a new account</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Username" type="text" autoComplete="new-text" onChange={e => setUserName(e.target.value)}/> {/*This is the username*/}
                  </InputGroup>
                </FormGroup>
                
              <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" onChange={e => setPassword(e.target.value)}/> {/*This is the password*/}
                  </InputGroup>
                </FormGroup>
                {/* OPTIONAL CONFIRM PASSWORD */}
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Confirm Password" type="password" autoComplete="new-password" onChange={e => setConfirmPassword(e.target.value)}/>
                  </InputGroup>
                </FormGroup>
                <FormText color="danger" className="text-center">
                  {alertMessage1}
                </FormText>
                <hr className="my-4" />
                <div className="text-center text-muted mb-4">
                  <small>Enter Personal Information</small>
                </div>
                {/* FLEX BOX FOR FIRSTNAME AND LASTNAME */}
                <div className="d-flex justify-content-center">
                <FormGroup className="mb-3 flex-fill">
                  <InputGroup className="input-group-alternative">
                    {/* <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon> */}
                    <Input placeholder="FirstName" type="text" autoComplete="new-text" onChange={e => setFirstName(e.target.value)}/> {/*This is the username*/}
                  </InputGroup>
                </FormGroup>
              <FormGroup className="mb-3 pl-2 flex-fill">
                  <InputGroup className="input-group-alternative">
                    {/* <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon> */}
                    <Input placeholder="LastName" type="text" autoComplete="new-text" onChange={e => setLastName(e.target.value)}/> {/*This is the username*/}
                  </InputGroup>
                </FormGroup>
                </div>
                {/* FLEX BOX FOR FIRSTNAME AND LASTNAME END*/}

                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-briefcase-24" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Company/Institution Name" type="text" autoComplete="new-company" onChange={e => setCompany(e.target.value)}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email" onChange={e=> setEmail(e.target.value)}/>  {/*This is the email*/}
                  </InputGroup>
                </FormGroup>
                <ButtonGroup role="button">
                  <Button onClick={e => setUserType(e)} active={choose.isCandidate}>Candidate</Button>
                  <Button onClick={e => setUserType(e)} active={choose.isEmployer}>Employer</Button>
                </ButtonGroup>
                <FormText color="danger" className="text-center">
                  {alertMessage2}
                </FormText>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={register}>
                    Create account
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }

export default Register;
