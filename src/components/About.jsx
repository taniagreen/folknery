import React, { PropTypes } from 'react';

function About(props) {
  return (
    <div className="container">
      <h3 className="text-center">{props.data.header}</h3>
      {props.data.text1}<br /><br />
      {props.data.text2}<br /><br />
      {props.data.text3}<br /><br />
      {props.data.text4}<br /><br />
      {props.data.text5}<br /><br />
      {props.data.text6}<br /><br />
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-10">
          <div className="col-sm-1" />
          <div className="col-sm-4 text-center">
            <p><strong>{props.data.personY}</strong></p><br />
            <a>
              <img src="/Images/folk1.jpg" alt="Yaryna Kvitka" className="img-circle person" width="255" height="255" />
            </a>
            <p>{props.data.personYdescr}</p>
          </div>
          <div className="col-sm-2" />
          <div className="col-sm-4 text-center">
            <p><strong>{props.data.personV}</strong></p><br />
            <a>
              <img src="/Images/folk2.jpg" alt="Volodymyr Muliar" className="img-circle person" width="255" height="255" />
            </a>
            <p>{props.data.personVdescr}</p>
          </div>
          <div className="col-sm-1" />
        </div>
        <div className="col-sm-1" />
      </div>
    </div>
  );
}

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;
