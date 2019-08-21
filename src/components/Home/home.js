import React from "react";
import Buttons from "./homebuttons.js";
import PendingPackageTable from "./pendingPackageTable.js";
import "./buttons.css";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import BreadCrumb from "../Widgets/Breadcrumb/breadcrumb.js";
import Chart from "../Widgets/Charts/charts.js";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from "mdbreact";

const buttons = [
  {
    text: "Entry New Package",
    className: "home-button",
    color: "#3ec7c2",
    icon: faPlus,
    link: "/add-new-package"
  },
  {
    text: "Assign Packages",
    className: "home-button",
    color: "#1cafec",
    icon: faEdit,
    link: "/intermediate"
  },
  {
    text: "Add New Exam",
    className: "home-button",
    link: "/add-new-exam",
    color: "#3ec7c2",
    icon: faPlus
  }
];
class Home extends React.Component {
  state = {
    data: [
      {
        name: "Civil",
        "First Year": 4000,
        "Second Year": 2400,
        "Third Year": 1600,
        "Fourth Year": 1000
      },
      {
        name: "Computer",
        "First Year": 3000,
        "Second Year": 1398,
        "Third Year": 2210,
        "Fourth Year": 1200
      },
      {
        name: "Electronics",
        "First Year": 2000,
        "Second Year": 980,
        "Third Year": 290,
        "Fourth Year": 900
      },
      {
        name: "Electrical",
        "First Year": 2780,
        "Second Year": 3908,
        "Third Year": 2000,
        "Fourth Year": 1300
      },
      {
        name: "Mechanical",
        "First Year": 1890,
        "Second Year": 4800,
        "Third Year": 2181,
        "Fourth Year": 1100
      },
      {
        name: "Architecture",
        "First Year": 2390,
        "Second Year": 3800,
        "Third Year": 2500,
        "Fourth Year": 100
      },
      {
        name: "Geometrical",
        "First Year": 3490,
        "Second Year": 4300,
        "Third Year": 2100,
        "Fourth Year": 1000
      }
    ]
  };
  PendingBody = () => {
    return (
      
        <MDBCard style={{margin: "15px"}}>
          <MDBCardHeader>Pending Packages</MDBCardHeader>
          <MDBCardBody>
            <PendingPackageTable />
          </MDBCardBody>
        </MDBCard>
    );
  };

  render() {
    return (
      <div>
        <BreadCrumb className="breadcrumb" />
        <div className="chart-buttons">
          <MDBContainer>
            <MDBCard>
              <MDBCardHeader>Pending Package Status</MDBCardHeader>
              <MDBCardBody>
                {/* COde For Bar chart */}
                <Chart data={this.state.data} />
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
          <div>
            <MDBCard>
              <MDBCardHeader>Quick Links</MDBCardHeader>
              <MDBCardBody>
                <Buttons class="packageButtons" buttons={buttons} />
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
        {this.PendingBody()}
      </div>
    );
  }
}
export default Home;
