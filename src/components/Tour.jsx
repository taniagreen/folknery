import React, { PropTypes } from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

function Tour(props) {
  const tours = props.data.items.map(item => (
    <Row>
      <Col xs={3} sm={2} md={2} lg={1}><i>{item.date}</i></Col>
      <Col xs={9} sm={10} md={10} lg={11}>{item.description}</Col>
    </Row>
  ));

  return (
    <div id="tour" className="container space">
      <h3 className="text-center">{props.data.header}</h3>
      <div>
        {tours}
      </div>
    </div>
  );
}

Tour.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tour;
