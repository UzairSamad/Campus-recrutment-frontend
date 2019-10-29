import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import SubmitButton from "../CustomInput/SubmitButton";

class CompanyRegister extends Component {
  render() {
    return (
      <form className="form-containerregister">
        <fieldset className="register-field">
          <h2>SignUp here..</h2>
          CompanyName: <CustomInput type="text" required />
          E-mail : <CustomInput type="email" required />
          Location: <CustomInput type="text" required />
          Category:
          <CustomInput type="text" required />
          Password : <CustomInput type="password" required />
          <SubmitButton value="SignUp" />
        </fieldset>
      </form>
    );
  }
}

export default CompanyRegister;
