import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  Button
} from "reactstrap";

// core components
import bgImage from "assets/img/bg16.jpg";

function RegisterPage() {
  const [firstnameFocus, setfirstnameFocus] = React.useState(false);
  const [lastnameFocus, setlastnameFocus] = React.useState(false);
  const [emailFocus, setemailFocus] = React.useState(false);
  const [numberFocus, setnumberFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  }, []);
  return (
    <>
      <div className="content">
        <div className="register-page">
          <Container>
            <Row className="justify-content-center">
              <Col lg={5} md={8} xs={12}>
                <div className="info-area info-horizontal mt-5">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons media-2_sound-wave" />
                  </div>
                  <div className="description">
                    <h5 className="info-title">Marketing</h5>
                    <p className="description">
                    Virtualisez votre commerce/entreprise pour qu’il puisse être visité sur Google Street!
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons media-1_button-pause" />
                  </div>
                  <div className="description">
                    <h5 className="info-title">Simple et rapide</h5>
                    <p className="description">
                    Optimisez et accélérez vos ventes et locations immobilières grâce aux visites virtuelles disponibles 24h sur 24.
                    </p>
                  </div>
                </div>
                <div className="info-area info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons users_single-02" />
                  </div>
                  <div className="description">
                    <h5 className="info-title">Immersion interactive</h5>
                    <p className="description">
                    Scénarisez l'exploration de votre environnement virtuel avec des éléments intéractifs afin d'enrichir l'expérience et les connaissances des visiteurs.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={8} xs={12}>
                <Card className="card-signup">
                  <CardHeader className="text-center">
                    <CardTitle tag="h4">S'enregistrer</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <InputGroup
                        className={firstnameFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Prénom..."
                          onFocus={(e) => setfirstnameFocus(true)}
                          onBlur={(e) => setfirstnameFocus(false)}
                        />
                      </InputGroup>
                      <InputGroup
                        className={lastnameFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Nom de famille..."
                          onFocus={(e) => setlastnameFocus(true)}
                          onBlur={(e) => setlastnameFocus(false)}
                        />
                      </InputGroup>
                      <InputGroup
                        className={emailFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          placeholder="Email..."
                          onFocus={(e) => setemailFocus(true)}
                          onBlur={(e) => setemailFocus(false)}
                        />
                      </InputGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" />
                          <span className="form-check-sign" />
                          <div>
                            J'accepte les {" "}
                            <a href="#something">terms and conditions</a>.
                          </div>
                        </Label>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      color="primary"
                      size="lg"
                      className="btn-round"
                      href="#pablo"
                    >
                      Commencer
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div
        className="full-page-background"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      />
    </>
  );
}

export default RegisterPage;
