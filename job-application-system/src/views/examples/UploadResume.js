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
// react plugin used to create charts
import { connect } from "react-redux";
import "assets/css/custom_form_style.css";
import axios from "axios";
// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

import Header from "components/Headers/Header.js";

function UploadResume({
  match: {
    params: { job: jobID },
  }
}) 
{
  
  const [selectedFile, setSelectedFile] = React.useState(null);

  const onChangeHandler = (event) => setSelectedFile(event.target.files[0]);
  
  const onClickHandler = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("jobID",jobID)
    axios
      .post("http://localhost:4000/upload", data, {
        // receive two parameter endpoint url ,form data
        withCredentials: true,
      })
      .then((res) => {
        // then print response status
        console.log(res);
        window.location = `/user/jobs`
      });
  };

  return (
    <>
      <Header flag={false} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h1> Add Your Details </h1>
              </CardHeader>
              <CardBody>
                {/* File Upload */}
                <form method="post" action="#" id="#">
                  <div className="form-group files align-items-center">
                    <label>Upload Your File </label>
                    <input
                      type="file"
                      className="form-control"
                      name="file"
                      multiple=""
                      onChange={onChangeHandler}
                    />
                    <button
                      type="button"
                      className="btn btn-success btn-block"
                      onClick={onClickHandler}
                    >
                      Upload
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(UploadResume);
