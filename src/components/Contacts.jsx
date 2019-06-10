import React, { PropTypes } from 'react';

function Contacts(props) {
  return (
    <div id="contact" className="container">
      <h3 className="text-center">{props.data.header}</h3>
      <p className="text-center wrap-text">{props.data.text}</p>
      <div className="row test">
        <div className="col-md-12">
          <p className="text-center"><span className="glyphicon glyphicon-envelope" />{props.data.mail}</p>
        </div>
      </div>
      <div className="row test">
        <div className="col-md-12">
          <p className="text-center"><a rel="noopener noreferrer" target="_blank" style={{ color: 'black' }} href={`https://${props.data.link}`}>{props.data.link}</a></p>
        </div>
      </div>
    </div>
  );
}

Contacts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};
export default Contacts;
