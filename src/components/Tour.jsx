import React, { PropTypes } from 'react';

function Tour(props) {
  return (
    <div id="tour" className="bg-1">
      <div className="container">
        <h3 className="text-center">{props.data.header}</h3>
        <p className="text-center">{props.data.text}</p>
        <ul className="list-group">
          <li className="list-group-item">{props.data.place1} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place2} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place3} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place3} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place3} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place3} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place3} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place3} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place3} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
          <li className="list-group-item">{props.data.place3} <span className="badge"><a href="http://www.facebook/dvokolisni.com">{props.data.moreinfo}</a></span></li>
        </ul>
      </div>
    </div>
  );
}

Tour.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Tour;
