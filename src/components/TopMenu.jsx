import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';


function TopMenu(props) {
  let lang = {};
  if (props.lang === 'uk') {
    const boundOnLangChange = props.onLangChange.bind(this, 'en');
    lang = <Link onClick={boundOnLangChange} to="/">EN</Link>;
  } else {
    const boundOnLangChange = props.onLangChange.bind(this, 'uk');
    lang = <Link onClick={boundOnLangChange} to="/uk/">UK</Link>;
  }
  return (
    <div className="top-menu">
      <Navbar fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href=""><img className="logoTop" src={props.data.logo} alt="Logo" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey="music" href="#"><Link to="#music">{props.data.music}</Link></NavItem>
            <NavItem eventKey="tour" href="#"><Link to="#tour">{props.data.tour}</Link></NavItem>
            <NavItem eventKey="twowheeledchronicles" href="#"><Link to="#twowheeledchronicles">{props.data.twowheeledchronicles}</Link></NavItem>
            <NavItem eventKey="contact" href="#"><Link to="#contact">{props.data.contact}</Link></NavItem>
            <NavItem eventKey={5} href="#">{lang}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

TopMenu.propTypes = {
  data: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
};

export default TopMenu;
