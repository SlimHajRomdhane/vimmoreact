import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid}>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nudr-footer"
                className="mr-4-px"
                target="_blank"
              >
                SlimHRLLC
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100086220421986"
                className="mr-4-px"
                target="_blank"
              >
                A propos
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100086220421986"
                target="_blank"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

Footer.defaultProps = {
  default: false,
  fluid: false
};

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
