import React, { PropTypes } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

class Singles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVideoIndex: 0 };
  }
  render() {
    const items = [];
    this.props.soundCloudTrack.forEach((item, index) => {
      items.push(
        <Col key={index} lg={12} sm={12} xs={12} md={12}>
          <iframe
            width="100%"
            scrolling="no"
            frameBorder="no"
            src={item.trackSrc}
            />
        </Col>
      );
    });
    return (
      <div className="bg-1">
        <div className="container space">
          <h3 className="text-center">{this.props.header}</h3>
          <Grid>
            <Row>
              {items}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

Singles.propTypes = {
  header: PropTypes.string.isRequired,
  soundCloudTrack: PropTypes.array.isRequired,
};

export default Singles;
