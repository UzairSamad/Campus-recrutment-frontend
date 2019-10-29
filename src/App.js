import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentRegister from "./Components/Student/studentRegister";
import StudentLogin from "./Components/Student/studentLogin";
import CompanyLogin from "./Components/Company/Companylogin";
import CompanyRegister from "./Components/Company/CompanyRegister";

class App extends Component {
  render() {
    return (
      <div>
        {/* <StudentRegister />
        <StudentLogin /> */}
        <CompanyRegister />
        <CompanyLogin />
      </div>
    );
  }
}

export default App;
