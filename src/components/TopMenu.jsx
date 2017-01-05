import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';


function TopMenu(props) {
  let lang = {};
  if (props.lang === 'uk') {
    lang = <Link to="/">EN</Link>;
  } else {
    lang = <Link to="/uk/">UK</Link>;
  }
  return (
    <div className="top-menu">
      <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href=""><img className="logoTop" src={props.data.logo} alt="Logo" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#music">{props.data.music}</NavItem>
            <NavItem eventKey={2} href="#tour">{props.data.tour}</NavItem>
            <NavItem eventKey={3} href="#twowheeledchronicles">{props.data.twowheeledchronicles}</NavItem>
            <NavItem eventKey={4} href="#contact">{props.data.contact}</NavItem>
            <NavItem eventKey={5} href="#">{lang}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

TopMenu.propTypes = {
  data: PropTypes.object.isRequired,
  lang: PropTypes.object.isRequired,
};

export default TopMenu;
