import React, { Component } from "react";
import "./display.css";
import Popup from "./Popup.jsx";
import Table from "./Table";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeesList: this.props.employees,
      show: false,
      name: "",
      salary: "",
      track: "",
      courseList: "",
      id: this.props.employees.length + 1,
      openEdit: false,
    };
  }

  openEdit = (editData, index) => {
    this.setState({
      openEdit: !this.state.openEdit,
      index,
      editData: editData,
      show: false,
    });
  };

  hndelDelete = (index) => {
    this.state.employeesList.splice(index, 1);
    this.setState({ employeesList: this.state.employeesList });
  };

  handeChage = (event) => {
    this.setState({ [event.target.className]: event.target.value });
  };

  handeTextarea = (event) => {
    this.setState({ courseList: event.target.value.split(",") });
  };

  handelSubmet = (e) => {
    e.preventDefault()
    this.props.employees.push({
      name: this.state.name,
      salary: this.state.salary,
      track: this.state.track,
      courseList: this.state.courseList,
      id: this.props.employees.length + 1,
    });
    this.setState({
      show: false,
      name: "",
      salary: "",
      track: "",
      courseList: "",
      id: "",
    }); 
  };

  handelEdit = (e) => {
    e.preventDefault()
    const items = this.state.employeesList
    items[this.state.index]={
      name: this.state.name || this.state.editData.name,
      salary: this.state.salary || this.state.editData.salary,
      track: this.state.track || this.state.editData.track,
      courseList: this.state.courseList || this.state.editData.courseList,
      id: this.state.index + 1,
    }
    this.setState( {
      employeesList: items,
      show:false,
      openEdit:false
    })
    this.setState({
      name: "",
      salary: "",
      track: "",
      courseList: "",
      id: "",
      edit: false,
      index: null,
    });
  };

  handelClose =()=>{
    this.setState({
      show:false,
      openEdit:false
    })
  }

  render() {
    return (
      <div>
        <Table
          employees={this.state.employeesList}
          openEdit={this.openEdit}
          hndelDelete={this.hndelDelete}
        />
        <div className="flex">
          <button
            className="showForm"
            onClick={() =>
              this.setState({ show: !this.state.show, openEdit: false })
            }
          >
            {this.state.show ? "close" : "add"}
          </button>
        </div>
        {this.state.openEdit && (
          <Popup
            editData={this.state.editData}
            handeChage={this.handeChage}
            handelSubmet={this.handelEdit}
            handeTextarea={this.handeTextarea}
            edit={this.state.openEdit}
            handelClose={this.handelClose}
          />
        )}
        {this.state.show && (
          <Popup
            handeChage={this.handeChage}
            handelSubmet={this.handelSubmet}
            handeTextarea={this.handeTextarea}
            edit={this.state.openEdit}
            handelClose={this.handelClose}
          />
        )}
      </div>
    );
  }
}

export default Display;
