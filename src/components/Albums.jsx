import React, { PropTypes } from 'react';

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentVideoIndex: 0 };
  }
  render() {
    return (
      <div className="container space">
        <h3 className="text-center">{this.props.header}</h3>
        <div className="text-center">
          <div>
            <h4>{this.props.album2_name}</h4>
            <iframe width="60%" height="530" scrolling="no" frameBorder="0" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/519939249&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />

          </div>
          <div className="row padding-bottom">
            <a href="https://play.google.com/store/music/album/Folknery_Son?id=Bu3n5dnkskpfhpdeoqk3xyxpuaq" rel="noopener noreferrer" target="_blank">
              <img alt="" src={this.props.googleplay_button} height="40" />
            </a>
            <a href="https://itunes.apple.com/ca/album/son/1384487523" rel="noopener noreferrer" target="_blank">
              <img alt="" src={this.props.itunes_button} height="40" />
            </a>
          </div>
          <div>
            <h4>{this.props.album1_name}</h4>
            <iframe width="60%" height="650" frameBorder="0" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/127053898&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false" />
          </div>
          <div className="row">
            <a href="https://play.google.com/store/music/artist/Folknery?id=A6vostbtw6b7n3nmstbk2flpq5e" rel="noopener noreferrer" target="_blank">
              <img alt="" src={this.props.googleplay_button} height="40" />
            </a>
            <a href="https://itunes.apple.com/ca/album/useful-things/id1123854319" rel="noopener noreferrer" target="_blank">
              <img alt="" src={this.props.itunes_button} height="40" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Albums.propTypes = {
  album1_name: PropTypes.string.isRequired,
  album2_name: PropTypes.string.isRequired,
  itunes_button: PropTypes.string.isRequired,
  googleplay_button: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default Albums;
