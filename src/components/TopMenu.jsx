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
    /* <Navbar>
     <Navbar.Header>
       <Navbar.Brand>
         <a href="#"><img src={props.data.logo} alt="Folknery" /></a>
       </Navbar.Brand>
     </Navbar.Header>
     <Navbar.Collapse>
       <Nav>
         <NavItem eventKey={1} href="#music">{props.data.music}</NavItem>
         <NavItem eventKey={2} href="#tour">{props.data.tour}</NavItem>
         <NavItem eventKey={3} href="#twowheeledchronicles">{props.data.twowheeledchronicles}</NavItem>
         <NavItem eventKey={4} href="#contact">{props.data.contact}</NavItem>
         <NavItem eventKey={5} href="#">{lang}</NavItem>
       </Nav>
     </Navbar.Collapse>
   </Navbar>*/
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <img className="logoTop" src={props.data.logo} alt="Logo" />
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#music">{props.data.music}</a></li>
            <li><a href="#tour">{props.data.tour}</a></li>
            <li><a href="#twowheeledchronicles">{props.data.twowheeledchronicles}</a></li>
            <li><a href="#contact">{props.data.contact}</a></li>
            <li>{lang}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

TopMenu.propTypes = {
  data: PropTypes.object.isRequired,
  lang: PropTypes.object.isRequired,
};

export default TopMenu;
