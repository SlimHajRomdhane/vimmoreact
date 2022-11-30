import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

// core components
import bgImage from "assets/img/bg15.jpg";

function Pricing() {
  React.useEffect(() => {
    document.body.classList.add("pricing-page");
    return function cleanup() {
      document.body.classList.remove("pricing-page");
    };
  }, []);
  return (
    <>
      <div className="content">
        <div className="pricing-page">
          <Container>
            <Row>
              <Col xs={12} md={6} className="ml-auto mr-auto text-center">
                <h2 className="title">Choisissez le plan qui vous convient</h2>
                <h5 className="description">
                  N'hésitez pas à nous contacter pour que nous vous aidions à choisir
                </h5>
              </Col>
            </Row>
            <Row>
              <Col lg="3" md="6">
                <Card className="card-pricing card-plain">
                  <h6 className="card-category">Pack Architecte</h6>
                  <CardBody>
                    <div className="card-icon icon-warning">
                      <i className="now-ui-icons media-1_button-power" />
                    </div>
                    <CardTitle tag="h3">450DT</CardTitle>
                    <ul>
                      <li>Plan 2D</li>
                      <li>Photo de chaque pièce</li>
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round btn-neutral"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Ajouter au panier
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-pricing card-plain">
                  <h6 className="card-category">Pack agence immobilière</h6>
                  <CardBody>
                    <div className="card-icon icon-primary">
                      <i className="now-ui-icons objects_diamond" />
                    </div>
                    <CardTitle tag="h3">650DT</CardTitle>
                    <ul>
                      <li>Outils de mesurage 3D</li>
                      <li>Visite virtuelle Matterport 3D</li>
                      <li>Hébergement 6 mois</li>
                      <li>Insertion logo et contact</li>
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Ajouter au panier
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-pricing card-plain">
                  <h6 className="card-category">Pack entreprise</h6>
                  <CardBody>
                    <div className="card-icon icon-success">
                      <i className="now-ui-icons media-2_sound-wave" />
                    </div>
                    <CardTitle tag="h3">890DT</CardTitle>
                    <ul>
                      <li>Intégration dans Google Street View</li>
                      <li>Visite virtuelle Matterport 3D</li>
                      <li>10 Mattertags</li>
                      <li>Hébergement 1 an</li>
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round btn-neutral"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Ajouter au panier
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-pricing card-plain">
                  <h6 className="card-category">Pack architecte PRO</h6>
                  <CardBody>
                    <div className="card-icon icon-danger">
                      <i className="now-ui-icons education_atom" />
                    </div>
                    <CardTitle tag="h3">1100DT</CardTitle>
                    <ul>
                      <li>Plan 2D ou 3D coté</li>
                      <li>Visite virtuelle Matterport 3D</li>
                      <li>Outils de mesurage 3D</li>
                      <li>Hébergement 1 an</li>
                      <li>Plans d'étages format DWG et PDF</li>
                      <li>Modélisation 3D/BIM format RVT ou IFC</li>
                    </ul>
                  </CardBody>
                  <CardFooter>
                    <Button
                      className="btn-round btn-neutral"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Ajouter au panier
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

export default Pricing;
