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
// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  renderHeader = () =>
    this.props.flag
      ? <>
      {this.props.auth.Jobs.map((obj, index) => (
          <Col
            lg="6"
            xl="3"
            onClick={(e) => {
              this.props.setJobname(
                e.target.textContent === "Created-Job-i"
                  ? ""
                  : e.target.textContent
              );
            }}
          >
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <span className="h2 font-weight-bold mb-0">
                      {obj.JobName || "Created-Job-i"}
                    </span>
                  </div>
                </Row>
                <span className="text-success mr-2">
                  {obj.Resumes.length} candidates applied
                </span>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-wrap">
                    {obj.Description === undefined
                      ? "Description"
                      : obj.Description.length > 100
                      ? obj.Description.slice(0, 100) + "..."
                      : obj.Description}
                    
                  </span>
                </p>
              </CardBody>
            </Card>
          </Col>
        ))}
        <Col
          lg="3"
          xl="2"
          onClick={(e) => {
              window.location='/user/create-job'
          }}
        >
          <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
              <Row>
                  <i className="ni ni-fat-add fa-3x"/>
                  <span className="h3 font-weight-bold mt-3">
                    Create A job
                  </span>
              </Row>
            </CardBody>
          </Card>
        </Col>  
        </>
      : null;

  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <Row>
                {this.renderHeader()}
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
