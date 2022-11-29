/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

// core components
import PictureUpload from "components/CustomUpload/PictureUpload.js";

const Step1 = React.forwardRef((props, ref) => {
  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [firstnameState, setfirstnameState] = React.useState("");
  const [lastnameState, setlastnameState] = React.useState("");
  const [emailState, setemailState] = React.useState("");
  const [firstnameFocus, setfirstnameFocus] = React.useState("");
  const [lastnameFocus, setlastnameFocus] = React.useState("");
  const [emailFocus, setemailFocus] = React.useState("");
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
    state: {
      firstname,
      lastname,
      email,
      firstnameState,
      lastnameState,
      emailState
    }
  }));
  const firstNameChange = (e) => {
    setfirstname(e.target.value);
    if (e.target.value.length > 2) {
      setfirstnameState(" has-success");
    } else {
      setfirstnameState(" has-danger");
    }
  };
  const lastNameChange = (e) => {
    setlastname(e.target.value);
    if (e.target.value.length > 2) {
      setlastnameState(" has-success");
    } else {
      setlastnameState(" has-danger");
    }
  };
  const emailChange = (e) => {
    setemail(e.target.value);
    var emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(e.target.value)) {
      setemailState(" has-success");
    } else {
      setemailState(" has-danger");
    }
  };
  const isValidated = () => {
    if (
      firstnameState !== " has-success" ||
      lastnameState !== " has-success" ||
      emailState !== " has-success"
    ) {
      setfirstnameState(" has-danger");
      setlastnameState(" has-danger");
      setemailState(" has-danger");
      return false;
    }
    return true;
  };
  return (
    <>
      <h5 className="info-text">
        {" "}
        Let's start with the basic information (with validation)
      </h5>
      <Row className="justify-content-center">
        <Col xs={12} sm="4">
          <PictureUpload />
        </Col>
        <Col xs={12} sm="6">
          <InputGroup
            className={
              "form-control-lg" +
              (firstnameState ? firstnameState : "") +
              (firstnameFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons users_circle-08" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              defaultValue={firstname}
              type="text"
              placeholder="First Name (required)"
              name="firstname"
              onFocus={(e) => setfirstnameFocus(true)}
              onBlur={(e) => setfirstnameFocus(false)}
              onChange={(e) => firstNameChange(e)}
            />
          </InputGroup>
          <InputGroup
            className={
              "form-control-lg" +
              (lastnameState ? lastnameState : "") +
              (lastnameFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons text_caps-small" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              defaultValue={lastname}
              type="text"
              placeholder="Last Name (required)"
              name="lastname"
              onFocus={(e) => setlastnameFocus(true)}
              onBlur={(e) => setlastnameFocus(false)}
              onChange={(e) => lastNameChange(e)}
            />
          </InputGroup>
        </Col>
        <Col xs={12} lg={10} className="mt-3">
          <InputGroup
            className={
              "form-control-lg" +
              (emailState ? emailState : "") +
              (emailFocus ? " input-group-focus" : "")
            }
          >
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="now-ui-icons text_caps-small" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              defaultValue={email}
              type="email"
              placeholder="Email (required)"
              name="email"
              onFocus={(e) => setemailFocus(true)}
              onBlur={(e) => setemailFocus(false)}
              onChange={(e) => emailChange(e)}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
});

export default Step1;
