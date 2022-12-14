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
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

import Step1 from "./Step1.js";
import Step2 from "./Step2.js";
import Step3 from "./Step3.js";

var steps = [
  {
    stepName: "About",
    stepIcon: "now-ui-icons users_circle-08",
    component: Step1
  },
  {
    stepName: "Account",
    stepIcon: "now-ui-icons ui-1_settings-gear-63",
    component: Step2
  },
  {
    stepName: "Address",
    stepIcon: "now-ui-icons ui-1_email-85",
    component: Step3
  }
];

function Wizard() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Col xs={12} md={10} className="mr-auto ml-auto">
          <ReactWizard
            steps={steps}
            navSteps
            validate
            title="Build Your Profile"
            description="This information will let us know more about you."
            headerTextCenter
            color="blue"
            finishButtonClasses="btn-wd"
            nextButtonClasses="btn-wd"
            previousButtonClasses="btn-wd"
          />
        </Col>
      </div>
    </>
  );
}

export default Wizard;
