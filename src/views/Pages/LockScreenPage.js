import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardTitle,
  Container,
  Col,
  FormGroup,
  Input,
  Button
} from "reactstrap";

// core components
import avatar from "assets/img/emilyz.jpg";

import bgImage from "assets/img/bg13.jpg";

function LockScreenPage() {
  React.useEffect(() => {
    document.body.classList.add("lock-page");
    return function cleanup() {
      document.body.classList.remove("lock-page");
    };
  }, []);
  return (
    <>
      <div className="content">
        <div className="lock-page">
          <Container>
            <Col lg={4} md={8} xs={12} className="mr-auto ml-auto">
              <Card className="card-lock text-center">
                <CardHeader>
                  <img src={avatar} alt="avatar-img" />
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h4">Nom d'utilisateur</CardTitle>
                  <FormGroup>
                    <Input type="password" placeholder="Mot de passe..." />
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button color="primary" size="lg" className="btn-round">
                    Déverrouiller
                  </Button>
                </CardFooter>
              </Card>
            </Col>
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

export default LockScreenPage;
