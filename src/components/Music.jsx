import React, { PropTypes } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVideoIndex: 0 };
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  onVideoSelect(event) {
    this.setState({ currentVideoIndex: event.currentTarget.value });
  }

  render() {
    // console.debug(this.props.videos[this.state.currentVideoIndex].src);
    const items = [];
    this.props.videos.forEach((item, index) => {
      items.push(
        <Col key={index} xs={6} md={3}>
          <button className="thumbnail" title={item.alt} onClick={this.onVideoSelect} value={index}>
            <img className="videoThumbnail" alt={item.alt} src={item.photoSrc} />
            <img className="videoBtn" alt="" src="../Images/button.png" />
          </button>
        </Col>,
      );
    });
    return (
      <div id="music" className="bg-1">
        <div className="container">
          <h3 className="text-center">{this.props.header}</h3>
          <div className="videoWrapper">
            <iframe src={this.props.videos[this.state.currentVideoIndex].videoSrc} frameBorder="0" allowFullScreen />
          </div>
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

Music.propTypes = {
  header: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
};

export default Music;
