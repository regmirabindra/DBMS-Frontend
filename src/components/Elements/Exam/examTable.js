import React from "react";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Table from "../../Widgets/Tables/tables.js";
class ExamTable extends React.Component {
  headings = [
    {
      label: "Date",
      sort: "asc",
      field: "date", 
    },
    {
      label: "Exam Type",
      sort: "asc",
      field: "examType",
      grouping: true, 
    },
    {
      label: "Course Code",
      sort: "asc",
      field: "courseCode"
    },
    {
      label: "Year",
      sort: "asc",
      field: "year", 
      grouping: true,
    },
    {
      label: "Part",
      sort: "asc",
      field: "part",
      grouping:true,
    },
    {
      label: "Program Name",
      sort: "asc",
      field: "programName",
      grouping:true
    }
  ];

  actions = [
    {
      text: "Edit",
      icon: faEdit,
      link: "/edit-exam/"
    },
    {
      text: "Delete",
      icon: faTrash,
      link: "/"
    }
  ];

  state = {
    tableData: [],
    filtered: [],
    noResult: false,
    isLoaded: false,
    categories:{}
  };

  componentWillMount = () => {
    let receivedProps = this.props;
    if (receivedProps.hasOwnProperty("postedData")) {
      this.setState({
        isLoaded: true,
        tableData: this.props.postedData
      });
    } else {
      fetch("http://localhost:4000/API/query/getExams")
        .then(res => res.json())
        .then(json => {

          let tableData = json;
          let categories = {}
          let groupBy = this.headings.filter((header)=>header.grouping)
          for (let header of groupBy)
          {
            let groupByKeyWord = header.field;
            categories[groupByKeyWord] = []
            for (let item of tableData){
                //console.log("efse", item)
                if (!categories[groupByKeyWord].includes(item[groupByKeyWord]))
                {
                    categories[groupByKeyWord].push(item[groupByKeyWord])
                }
            }
          }
          this.setState({
            isLoaded: true,
            tableData: json,
            categories:categories
          });
        });
    }
  };

  statehandler = states => {
    this.setState(states);
  };
  render() {
    //let { isLoaded } = this.state;
    return (
      <div className="container-fluid">
        <Table
          headings={this.headings}
          tableData={
            this.state.noResult ? this.state.filtered : this.state.tableData
          }
          state={this.state}
          setState={states => this.statehandler(states)}
          actions={this.actions}
          categories= {this.state.categories}
        />
      </div>
    );
  }
}
export default ExamTable;
