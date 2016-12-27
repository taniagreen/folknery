import React, { PropTypes } from 'react';

function TwoWheeledChronicles(props) {
  return (
    <div className="container" id="twowheeledchronicles">
      <h3 className="text-center">{props.data.header}</h3>
      {props.data.text1}<br /><br />
      {props.data.text2}<a className="default" href="http://www.twowheeledchronicles.com">{props.data.text3}</a>{props.data.text4}<br /><br />
      <div className="row text-center">
        <div className="col-sm-4">
          <div className="thumbnail">
            <img width="250" src={props.data.exp_photo1} />
            <p><strong>{props.data.exp_name1}</strong> ({props.data.exp_date1})</p>
            <a className="btn" href={props.data.exp_link1} target="blank">{props.data.button_text}</a>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img width="250" src={props.data.exp_photo2} />
            <p><strong>{props.data.exp_name2}</strong> ({props.data.exp_date2})</p>
            <a className="btn" href={props.data.exp_link2} target="blank">{props.data.button_text}</a>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img width="250" src={props.data.exp_photo3} />
            <p><strong>{props.data.exp_name3}</strong> ({props.data.exp_date3})</p>
            <a className="btn" href={props.data.exp_link3} target="blank">{props.data.button_text}</a>
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
