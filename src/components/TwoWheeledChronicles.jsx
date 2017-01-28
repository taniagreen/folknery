import React, { PropTypes } from 'react';

function TwoWheeledChronicles(props) {
  return (
    <div id="twowheeledchronicles" className="bg-1">
      <div className="container space">
        <h3 className="text-center">{props.data.header}</h3>
        <div className="multiline two-wheeled">
          {props.data.text}
          <a href={props.data.exp_link} target="blank">
            {props.data.text_link}
          </a>
        </div>
        <div className="text-center">
          <a href={props.data.exp_link} target="blank">
            <img src="/Images/folknery_website.jpg" alt="Two-Wheeled Chronicles" className="img-circle person" width="255" height="255" />
          </a>
          <div>
            <a className="btn" href={props.data.exp_link} target="blank">{props.data.button_text}</a>
          </div>
        </div>
      </div>

    </div>
  );
}

TwoWheeledChronicles.propTypes = {
  data: PropTypes.object.isRequired,
};
export default TwoWheeledChronicles;
