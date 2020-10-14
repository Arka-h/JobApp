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
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { connect } from "react-redux";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import Axios from "axios";

function Jobs({ auth }) {
  const [tableData, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      const res = await Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/jobs",
      });
      //This is inside fetchData only
      setData(
        res.data.map((obj, index) => (
          <tr key={index}>
            <th scope="row"> {obj.JobName || "Job Name"}</th>
            <td>{obj.company || "company"}</td>
            <td>
              {obj.Description === undefined
                ? "Description"
                : obj.Description.length > 100
                ? obj.Description.slice(0, 100) + "..."
                : obj.Description}
            </td>
            {auth.userType === "Candidate" ? (
              <td>
                <Button
                  id={obj._id}
                  color="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location = `/user/${e.currentTarget.id}/upload`;
                  }}
                  size="sm"
                >
                  Upload Resume
                </Button>
              </td>
            ) : null}
          </tr>
        ))
      );
    }
    fetchData();
  }, []);

  // console.log(res.data[0].JobName,res.data[0].company,res.data[0].Description)

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
                    <h3 className="mb-0 text-left"> All Jobs </h3>
                  </div>
                  {/* <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
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
                    <th scope="col">Job Name</th>
                    <th scope="col">Company</th>
                    <th scope="col">Description</th>
                    {auth.userType === "Candidate" ? (
                      <th scope="col">Apply</th>
                    ) : null}
                  </tr>
                </thead>
                <tbody>{tableData}</tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Jobs);
