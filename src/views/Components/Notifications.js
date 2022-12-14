import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Notifications() {
  const notificationAlert = React.useRef();
  const [modalMini, setModalMini] = React.useState(false);
  const [modalClassic, setModalClassic] = React.useState(false);
  const [modalNotice, setModalNotice] = React.useState(false);
  const toggleModalClassic = () => {
    setModalClassic(!modalClassic);
  };
  const toggleModalNotice = () => {
    setModalNotice(!modalNotice);
  };
  const toggleModalMini = () => {
    setModalMini(!modalMini);
  };
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful premium admin
            for every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Notifications</h2>
            <p className="category">
              Please Checkout{" "}
              <a
                href="https://github.com/creativetimofficial/react-notification-alert"
                target="_blank"
              >
                The Full Documentation
              </a>
              .
            </p>
          </div>
        }
      />
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications Style</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <span>This is a plain notification</span>
                </Alert>
                <Alert color="info" isOpen={true} toggle={() => {}}>
                  <span>This is a notification with close button.</span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={true}
                  toggle={() => {}}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon.
                  </span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={true}
                  toggle={() => {}}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notification states</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="primary" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Primary - </b> This is a regular notification made with
                    color="primary"
                  </span>
                </Alert>
                <Alert color="info" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Info - </b> This is a regular notification made with{" "}
                    color="info"
                  </span>
                </Alert>
                <Alert color="success" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Success - </b> This is a regular notification made with
                    color="success"
                  </span>
                </Alert>
                <Alert color="warning" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Warning - </b> This is a regular notification made with
                    color="warning"
                  </span>
                </Alert>
                <Alert color="danger" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Danger - </b> This is a regular notification made with{" "}
                    color="danger"
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} xs={12}>
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col md={6} className="ml-auto mr-auto text-center">
                      <CardTitle tag="h4">
                        Notifications Places
                        <p className="category">Click to view notifications</p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} xs={12} className="ml-auto mr-auto">
                      <Row>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tl")}
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} xs={12} className="ml-auto mr-auto">
                      <Row>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
                <Row className="btns-mr-5">
                  <Col md={12} className="text-center">
                    <CardHeader>
                      <CardTitle tag="h4">Modal</CardTitle>
                    </CardHeader>
                    <Button color="primary" onClick={toggleModalClassic}>
                      Classic modal
                    </Button>
                    <Modal
                      isOpen={modalClassic}
                      toggle={toggleModalClassic}
                      className="text-center"
                    >
                      <ModalHeader
                        className="justify-content-center uppercase title"
                        toggle={toggleModalClassic}
                        tag="h4"
                      >
                        Modal Title
                      </ModalHeader>
                      <ModalBody>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean. A small river named Duden flows by their place
                          and supplies it with the necessary regelialia. It is a
                          paradisematic country, in which roasted parts of
                          sentences fly into your mouth.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="default">Nice Button</Button>
                        <Button color="danger" onClick={toggleModalClassic}>
                          Close
                        </Button>
                      </ModalFooter>
                    </Modal>
                    <Button color="info" onClick={toggleModalNotice}>
                      Notice modal
                    </Button>
                    <Modal
                      isOpen={modalNotice}
                      toggle={toggleModalNotice}
                      className="modal-notice text-center"
                    >
                      <ModalHeader toggle={toggleModalNotice}>
                        How Do You Become an Affiliate?
                      </ModalHeader>
                      <ModalBody>
                        <div className="instruction">
                          <Row>
                            <Col md="8">
                              <strong>1. Register</strong>
                              <p className="description">
                                The first step is to create an account at{" "}
                                <a
                                  href="http://www.creative-tim.com/?ref=nudr-notification-page"
                                  target="_blank"
                                >
                                  Creative Tim
                                </a>
                                . You can choose a social network or go for the
                                classic version, whatever works best for you.
                              </p>
                            </Col>
                            <Col md="4">
                              <div>
                                <img
                                  alt="..."
                                  className="rounded img-raised"
                                  src={require("assets/img/bg1.jpg")}
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="instruction">
                          <Row>
                            <Col md="8">
                              <strong>2. Apply</strong>
                              <p className="description">
                                The first step is to create an account at{" "}
                                <a
                                  href="http://www.creative-tim.com/?ref=nudr-notification-page"
                                  target="_blank"
                                >
                                  Creative Tim
                                </a>
                                . You can choose a social network or go for the
                                classic version, whatever works best for you.
                              </p>
                            </Col>
                            <Col md="4">
                              <div>
                                <img
                                  alt="..."
                                  className="rounded img-raised"
                                  src={require("assets/img/bg3.jpg")}
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <p>
                          If you have more questions, don't hesitate to contact
                          us or send us a tweet @creativetim. We{"'"}
                          re here to help!
                        </p>
                      </ModalBody>
                      <ModalFooter className="justify-content-center">
                        <Button
                          color="info"
                          className="btn-round"
                          onClick={toggleModalNotice}
                        >
                          Sounds good!
                        </Button>
                      </ModalFooter>
                    </Modal>
                    <Button color="warning" onClick={toggleModalMini}>
                      Small alert modal
                    </Button>
                    <Modal
                      isOpen={modalMini}
                      toggle={toggleModalMini}
                      size="mini"
                      modalClassName="modal-primary"
                    >
                      <div className="modal-header justify-content-center">
                        <div className="modal-profile">
                          <i className="now-ui-icons users_circle-08" />
                        </div>
                      </div>
                      <ModalBody>
                        <p>Always have an access to your profile</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="link" disabled className="btn-neutral">
                          Back
                        </Button>{" "}
                        <Button
                          color="link"
                          className="btn-neutral"
                          onClick={toggleModalMini}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
