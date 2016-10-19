import React, { PropTypes } from 'react';

function Contacts(props) {
  return (
    <div id="contact" className="container">
      <h3 className="text-center">{props.data.header}</h3>
      <p className="text-center">{props.data.text}</p>
      <div className="row test">
        <div className="col-md-12">
          <p><span className="glyphicon glyphicon-envelope" />{props.data.mail}</p>
        </div>
      </div>
    </div>
  );
}

Contacts.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Contacts;
