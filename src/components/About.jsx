import React, { PropTypes } from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

function About(props) {
  const skillsY = props.data.personYskills.map(item => <h6>{item}</h6>);
  const skillsV = props.data.personVskills.map(item => <h6>{item}</h6>);
  return (
    <div id="about" className="container space">
      <h3 className="text-center">{props.data.header}</h3>
      <div className="multiline">
        {props.data.text}
      </div>
      <Row>
        <Col md={12} sm={12}>
          <Col md={4} sm={4} className="text-right skillsText">
            <b>{props.data.personV}</b>
            <br />
            {skillsV}
          </Col>
          <Col md={4} sm={4} className="text-center">
            <a>
              <img src="/Images/Folknery.png" alt="Folknery" className="img-circle person" width="255" height="255" />
            </a>
          </Col>
          <Col md={4} sm={4} className="text-left skillsText">
            <b>{props.data.personY}</b>
            <br />
            {skillsY}
          </Col>
        </Col>
      </Row>
    </div>
  );
}

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;
