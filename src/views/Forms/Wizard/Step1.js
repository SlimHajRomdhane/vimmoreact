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
  const [number, setnumber] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [firstnameState, setfirstnameState] = React.useState("");
  const [numberState, setnumberState] = React.useState("");
  const [lastnameState, setlastnameState] = React.useState("");
  const [emailState, setemailState] = React.useState("");
  const [firstnameFocus, setfirstnameFocus] = React.useState("");
  const [numberFocus, setnumberFocus] = React.useState("");
  const [lastnameFocus, setlastnameFocus] = React.useState("");
  const [emailFocus, setemailFocus] = React.useState("");
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
    state: {
      firstname,
      lastname,
      number,
      email,
      firstnameState,
      lastnameState,
      numberState,
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
  const numberChange = (e) => {
    setnumber(e.target.value);
    if (e.target.value.length > 2) {
      setnumberState(" has-success");
    } else {
      setnumberState(" has-danger");
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
      numberState !== " has-success" ||
      emailState !== " has-success"
    ) {
      setfirstnameState(" has-danger");
      setlastnameState(" has-danger");
      setnumberState(" has-danger");
      setemailState(" has-danger");
      return false;
    }
    return true;
  };
  return (
    <>
      <h5 className="info-text">
        {" "}
        Commençons par quelque informations
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
