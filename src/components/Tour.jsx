import React, { PropTypes } from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

function Tour(props) {
  return (
    <div id="tour" className="container">
      <h3 className="text-center">{props.data.header}</h3>
      <p className="text-center">{props.data.text}</p>
      <p>{props.data.date1}  -  {props.data.place1}  -  {props.data.moreinfo1}  -  {props.data.price1}
      </p>
      <p>{props.data.date2}  -  {props.data.place2}  -  {props.data.moreinfo2}  -  {props.data.price2}
      </p>
    </div>
  );
}

Tour.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tour;
