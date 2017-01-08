import React, { PropTypes } from 'react';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVideoIndex: 0 };
  }
  render() {
    return (
      <div className="container">
        <h3 className="text-center">{this.props.header}</h3>
        <iframe width="100%" height="680" frameBorder="0" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/127053898&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />
      </div>
    );
  }
}

Albums.propTypes = {
  header: PropTypes.string.isRequired,
  soundCloudTrack: PropTypes.array.isRequired,
};

export default Albums;
