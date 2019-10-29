import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import SubmitButton from "../CustomInput/SubmitButton";
import "./stLogin.css";

class StudentLogin extends Component {
  render() {
    return (
      <form className="form-containerlogin">
        <fieldset className="form-field set">
          <h2 className="login-heading">SignIn</h2>
          UserName:
          <CustomInput type="text" required />
          Password:
          <CustomInput type="password" required />
          <SubmitButton value="SignIn" />
        </fieldset>
      </form>
    );
  }
}

export default StudentLogin;
