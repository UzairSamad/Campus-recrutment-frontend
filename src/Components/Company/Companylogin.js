import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import SubmitButton from "../CustomInput/SubmitButton";
import "../Student/stLogin.css";

class CompanyLogin extends Component {
  render() {
    return (
      <form className="form-containerlogin">
        <fieldset className="form-field set">
          <h2 className="login-heading">SignIn</h2>
          CompanyName:
          <CustomInput type="text" required />
          Password:
          <CustomInput type="password" required />
          <SubmitButton value="SignIn" />
        </fieldset>
      </form>
    );
  }
}

export default CompanyLogin;
