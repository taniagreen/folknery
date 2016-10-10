import React, { PropTypes } from 'react';

function TwoWheeledChronicles(props) {
  return (
    <div className="container" id="twowheeledchronicles">
      <h3 className="text-center">{props.data.header}</h3>
      {props.data.text1}<br /><br />
      {props.data.text2}<a href="http://www.twowheeledchronicles.com">{props.data.text3}</a>{props.data.text4}<br /><br />
      <div className="row text-center">
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src="./components/Images/300 (3).jpg" alt="Paris" />
            <p><strong>Paris</strong></p>
            <p>Fri. 27 November 2015</p>
            <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src="./components/Images/300 (4).jpg" alt="New York" />
            <p><strong>New York</strong></p>
            <p>Sat. 28 November 2015</p>
            <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src="./components/Images/300 (5).jpg" alt="San Francisco" />
            <p><strong>San Francisco</strong></p>
            <p>Sun. 29 November 2015</p>
            <button className="btn" data-toggle="modal" data-target="#myModal">Buy Tickets</button>
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
