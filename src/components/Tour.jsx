import React, { PropTypes } from 'react';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

function Tour(props) {
  return (
    <div id="tour" className="bg-1">
      <div className="container">
        <h3 className="text-center">{props.data.header}</h3>
        <p className="text-center">{props.data.text}</p>
        <Tab.Container defaultActiveKey="first">
          <Nav stacked>
            <NavItem eventKey="first">
            <div className="tour_info">{props.data.date1}  -  {props.data.place1}  -  {props.data.moreinfo1}  -  {props.data.price1}
            </div>
            </NavItem>
            <NavItem eventKey="second" className="tour_info">
            {props.data.date2}  -  {props.data.place2}  -  {props.data.moreinfo2}  -  {props.data.price2}
            </NavItem>
          </Nav>
          {/*<Tab.Content animation>
            <Tab.Pane eventKey="first">
            Tab 1 content
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            Tab 2 content
            </Tab.Pane>
          </Tab.Content>*/}
        </Tab.Container>
      </div>
    </div>
  );
}

Tour.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tour;
