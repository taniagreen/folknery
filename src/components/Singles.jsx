import React, { PropTypes } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Media from 'react-bootstrap/lib/Media';

function Singles(props) {
  return (
    <div className="albums">
      <div className="container">
        <h3 className="text-center">{props.data.header}</h3>
        <Media>
          <Media.Left>
            <img
              width={150}
              height={150}
              src="/Images/singles.jpg"
              alt={props.data.album_name}
            />
          </Media.Left>
          <Media.Body>
            <p>List of the singles</p>
          </Media.Body>
        </Media>
      </div>
    </div>
  );
}

Singles.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Singles;
