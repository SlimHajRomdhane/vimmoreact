import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function TimelinePage() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <div className="header text-center">
          <h3 className="title">Process</h3>
        </div>
        <Row>
          <Col md="12">
            <Card className="card-timeline card-plain">
              <CardBody>
                <ul className="timeline">
                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">
                      <i className="now-ui-icons objects_planet" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="danger">Quel est le processus ?</Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                        Choisissez votre pack ou vos services individuellement<br/>
                        Prenez un rendez-vous avec l’agence en cliquant sur "Prendre Rendez-Vous"<br/>
                        Shooting de la propriété<br/>
                        Recevez et télécharger votre rendu sur votre espace personnel
                        </p>
                      </div>
                      <h6>
                        <i className="ti-time" />
                        Zied Ben Mahmoud CEO
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge success">
                      <i className="now-ui-icons shopping_tag-content" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="success">Marketing</Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                        Les visites virtuelles que nous proposons sont « le must » dans le domaine. Elles mettent vraiment en valeur les biens immobiliers.
                        Elles font la différence avec les visites virtuelles « low-cost » basées sur de simples photos 360° assemblées.
                        Ainsi vous vous différenciez de la concurrence et votre bien sera vendu plus rapidement.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge info">
                      <i className="now-ui-icons shopping_delivery-fast" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="info">Visite virtuelle 24/7</Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                        Le saviez vous ? Chez Virtual Immo vous avez la possibilité de grouper vos prestations en commandant un pack parmi les 3 disponibles. Pas besoin de bloquer plusieurs dates, un seul rendez-vous suffit avec un seul prestataire pour l’ensemble des services ! Pratique non ? Plus d’infos ici appelez nous au 56654000!
                        </p>
                        <p>
                        Chez Virtual Immo nous utilisons la technologie dernière génération Matterport pour faire nos visites virtuelles. 
                        Elle permet la capture des couleurs et de la profondeur pour scanner l’intérieur d’un bien en 3D comme si vous étiez !
                        </p>
                        <hr />
                      </div>
                      <div className="timeline-footer">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            caret
                            className="btn-round"
                            color="info"
                            data-toggle="dropdown"
                            type="button"
                          >
                            <i className="now-ui-icons design_bullet-list-67" />
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Like
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Dislike
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Comment
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge warning">
                      <i className="now-ui-icons ui-1_email-85" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <Badge color="warning">Immersion interactive</Badge>
                      </div>
                      <div className="timeline-body">
                        <p>
                        Scénarisez l'exploration de votre environnement virtuel avec des éléments intéractifs afin d'enrichir l'expérience et les connaissances des visiteurs.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TimelinePage;
