import React, { PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';


class TopMenu extends React.Component {
  constructor(props) {
    super(props);

    this.onMenuItemSelect = this.onMenuItemSelect.bind(this);
  }

  onMenuItemSelect(eventKey) {
    if (eventKey === 'lang') {
      if (this.props.lang === 'uk') {
        browserHistory.push('/');
      } else {
        browserHistory.push('/uk/');
      }
    } else {
      window.location.hash = eventKey;
    }
  }

  render() {
    let lang = {};
    if (this.props.lang === 'uk') {
      lang = 'EN';
    } else {
      lang = 'UK';
    }

    return (
      <div className="top-menu">
        <Navbar fixedTop fluid collapseOnSelect onSelect={this.onMenuItemSelect}>
          <Navbar.Header>
            <Navbar.Brand>
              <img className="logoTop" src={this.props.data.logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey="music" href="#">{this.props.data.music}</NavItem>
              <NavItem eventKey="tour" href="#">{this.props.data.tour}</NavItem>
              <NavItem eventKey="twowheeledchronicles" href="#">{this.props.data.twowheeledchronicles}</NavItem>
              <NavItem eventKey="contact" href="#">{this.props.data.contact}</NavItem>
              <NavItem eventKey="lang" href="#">{lang}</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

TopMenu.propTypes = {
  data: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
};

export default TopMenu;
