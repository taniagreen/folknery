import React, { PropTypes } from 'react';

function Footer(props) {
  return (
    <footer className="text-center">
      {props.text}&nbsp;
      <a href="http://greenteam.site/" data-toggle="tooltip" title="Green Team">
       GreenTeam
      </a>
    </footer>
  );
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Footer;


