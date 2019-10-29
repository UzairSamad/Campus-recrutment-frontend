import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";
import SubmitButton from "../CustomInput/SubmitButton";

class StudentRegister extends Component {
  render() {
    return (
      <form className="form-containerregister">
        <fieldset>
          <h2>SignUp here</h2>
          Name: <CustomInput type="text" required />
          E-mail : <CustomInput type="email" required />
          Password : <CustomInput type="password" required />
          <SubmitButton value="SignUp" />
        </fieldset>
      </form>
    );
  }
}

export default StudentRegister;
