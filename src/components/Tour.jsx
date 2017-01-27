import React, { PropTypes } from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

function Tour(props) {
  return (
    <div id="tour" className="container space">
      <h3 className="text-center">{props.data.header}</h3>
      <div className="multiline">
        {props.data.text}
      </div>
    </div>
  );
}

Tour.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tour;
