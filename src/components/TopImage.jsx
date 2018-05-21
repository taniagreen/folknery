import React, { PropTypes } from 'react';

function TopImage(props) {
  return (
    <img src={props.data.src} alt={props.data.alt} style={{ width: '100%' }} />
  );
}

TopImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TopImage;
