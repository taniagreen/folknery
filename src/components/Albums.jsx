import React, { PropTypes } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Media from 'react-bootstrap/lib/Media';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVideoIndex: 0 };
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }
  render() {
    const items = [];
    this.props.soundCloudTrack.forEach((item, index) => {
      items.push(
        <Col xs={6} md={3}>
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            src={item.trackSrc}
          />
        </Col>
      );
    });
    return (
      <div className="container">
        <h3 className="text-center">{this.props.header}</h3>
        <Grid>
          <Row>
            {items}
          </Row>
        </Grid>
      </div>
    );
  }
}

Albums.propTypes = {
  header: PropTypes.string.isRequired,
  soundCloudTrack: PropTypes.array.isRequired,
};

export default Albums;
