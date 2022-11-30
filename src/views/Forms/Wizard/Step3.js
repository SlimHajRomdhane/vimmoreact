import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

// core components
var selectOptions = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
  { value: "four", label: "Four" },
  { value: "five", label: "Five" },
  { value: "six", label: "Six" }
];

const Step3 = React.forwardRef((props, ref) => {
  const [select, setSelect] = React.useState(null);
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
    state: {
      select
    }
  }));
  return (
    <>
      <h5 className="info-text"> Are you living in a nice area? </h5>
      <Row className="justify-content-center">
        <Col xs={12} sm={7}>
          <FormGroup>
            <Label>Street Name</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col xs={12} sm={3}>
          <FormGroup>
            <Label>Street No.</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col xs={12} sm={5}>
          <FormGroup>
            <Label>City</Label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col xs={12} sm={5}>
          <Label>Country</Label>
          <Select
            className="primary react-select"
            classNamePrefix="react-select"
            placeholder="Single Select"
            name="singleSelect"
            value={select}
            options={selectOptions}
            onChange={(value) => setSelect(value)}
          />
        </Col>
      </Row>
    </>
  );
});

export default Step3;
