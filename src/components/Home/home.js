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
    color: "orange",
    icon: faPlus,
    link: "/add-new-package"
  },
  {
    text: "Assign Packages",
    className: "home-button",
    color: "rgb(23,100,131)",
    icon: faEdit,
    link: "/intermediate"
  },
  {
    text: "Add New Exam",
    className: "home-button",
    link: "/add-new-exam",
    color: "orange",
    icon: faPlus
  }
];
const breadcrumbItems = [
  {
    text:"Dashboard",
    link:'/'
  }
]
class Home extends React.Component {
    
    
    
    state = {
        data :[
          //  {
          //    name: 'Civil', "First Year": 4000, "Second Year": 2400, "Third Year": 1600,"Fourth Year":1000,
          //  },
          //  {
          //    name: 'Computer', "First Year": 3000, "Second Year": 1398, "Third Year": 2210,"Fourth Year":1200,
          //  },
          //  {
          //    name: 'Electronics', "First Year": 2000, "Second Year": 980, "Third Year": 290,"Fourth Year":900,
          //  },
          //  {
          //    name: 'Electrical', "First Year": 2780, "Second Year": 3908, "Third Year": 2000,"Fourth Year":1300,
          //  },
          //  {
          //    name: 'Mechanical', "First Year": 1890, "Second Year": 4800, "Third Year": 2181,"Fourth Year":1100,
          //  },
          //  {
          //    name: 'Architecture', "First Year": 2390, "Second Year": 3800, "Third Year": 2500,"Fourth Year":100,
          //  },
          //  {
          //    name: 'Geometrical', "First Year": 3490, "Second Year": 4300, "Third Year": 2100,"Fourth Year":1000,
          //  },
         ]
   }

   componentDidMount=()=>{
    fetch(process.env.REACT_APP_BASE_URL+"API/query/getDepartmentWiseGraph")
    .then(res=>res.json())
    .then(json=>{
      this.setState({  
        data:json
      })
    })
   }
   PendingTitle =()=>{
    return(
        <div className = "pendingTitle">
            <span>
                PENDING PACKAGES
            </span>
        </div>
        )
}

   render() {
       return(
           <div>
             <BreadCrumb breadcrumbItems = {breadcrumbItems} className ="breadcrumb"/>
           
               <div className="chart-buttons">
                   <MDBContainer>
                      <MDBCard>
                       <MDBCardHeader>
                         Pending Package Status
                       </MDBCardHeader>
                       <MDBCardBody>
                         {/* COde For Bar chart */}
                         <Chart data ={this.state.data}/>
                       </MDBCardBody>
                       </MDBCard>
                     </MDBContainer>
                <div>
                       
                       <MDBCard>
                       <MDBCardHeader>Quick Links</MDBCardHeader>
                       <MDBCardBody>

                       <Buttons class= "packageButtons" buttons = {buttons}/>
                       </MDBCardBody>
                       </MDBCard>
                   </div>
               </div>
               <MDBCard style = {{marginTop:'20px'}}>
              <MDBCardHeader>
                Pending Packages
              </MDBCardHeader>
              <MDBCardBody>
                    <PendingPackageTable/>
              </MDBCardBody>
               </MDBCard>

           </div>
       )
   }
}
export default Home;
