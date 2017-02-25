import React, { PropTypes } from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

function About(props) {
  return (
    <div id="about" className="container space">
      <h3 className="text-center">{props.data.header}</h3>
      <div className="multiline">
        {props.data.text}
      </div>
      <Row>
        <Col mdOffset={1} md={10} sm={12}>
          <Col mdOffset={1} md={4} sm={6} className="text-center">
            <p><strong>{props.data.personY}</strong></p>
            <a>
              <img src="/Images/folk1.jpg" alt="Yaryna Kvitka" className="img-circle person" width="255" height="255" />
            </a>
            <p className="margin-bottom-md">{props.data.personYdescr}</p>
          </Col>
          <Col mdOffset={2} md={4} sm={6} className="text-center">
            <p><strong>{props.data.personV}</strong></p>
            <a>
              <img
                src="/Images/folk2.jpg"
                alt="Volodymyr Muliar"
                className="img-circle person"
                width="255"
                height="255"
              />
            </a>
            <p className="margin-bottom-md">{props.data.personVdescr}</p>
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
