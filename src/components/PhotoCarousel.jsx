import React, { PropTypes } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

function PhotoCarousel(props) {
  const items = [];
  props.data.photos.forEach((item) => {
    items.push(
      <Carousel.Item>
        <img alt={item.alt} src={item.src} />
      </Carousel.Item>
    );
  });
  return (
    <Carousel>
      {items}
    </Carousel>
  );
}

PhotoCarousel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PhotoCarousel;
