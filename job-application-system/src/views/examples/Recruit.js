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
// node.js library that concatenates classes (strings)
import { connect } from "react-redux";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";


import Header from "components/Headers/Header.js";
import '../../assets/css/ball.css'

function Recruit(props) {

const [jobname, setJobname]= React.useState('')

let populateTable = (Job)=>{
  let applicants =  props.auth.Jobs.find(job => {
    if(job.JobName===Job) 
      return true 
    else 
      return false
    })
  if (applicants===undefined){
    return null
  }
  else{
    console.log(applicants)  
    return applicants.Resumes.map((obj,index)=>{
      console.log(obj)
      return (<tr key={index}>
        <th scope="row"> { `${obj.nameCan['firstName']} ${obj.nameCan['lastName']}` ||'Can-Name' }</th>
        <td>{obj.emailCan||'email@id.com'}</td>
        <td>
        <a href={`http://localhost:4000/${obj.resumeFile}`}>
          <i className="ni ni-cloud-download-95 fa-2x"></i>
        </a>
        </td>
        <td>
        <a href={`http://localhost:3000/user/${Job}/${obj._id}/email`}>
          <i className="ni ni-send fa-2x"></i>
        </a>
        </td>
        </tr>) 
    })
  }
  }
  
 
  return (
    <>
      <Header flag={true} setJobname={ setJobname } />
      {/* Page content */}
      
      {
           jobname === '' ? null : 
        (<Container className="mt--7" fluid>
                <Row className="mt-5">
                  <Col className="mb-5 mb-xl-0">
                  
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <div className="col">
              <h3 className="mb-0">{  jobname}</h3>
                          </div>
                            {/* <div className="col text-right">
                              <Button
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                size="sm"
                              >
                                See all
                              </Button>
                            </div> */}
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Candidate Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Resume</th>
                            <th scope="col">Send Mail</th>
                          </tr>
                        </thead>
                        <tbody>
                          { populateTable(jobname) }
                        </tbody>
                        
                      </Table>
                      
                    </Card>
                  </Col>
                </Row>
                
              </Container>
               
        )
      }
    </>)
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(Recruit);
