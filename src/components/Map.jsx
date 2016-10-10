import React from 'react';

class Map extends React.Component {
  componentDidMount() {
    // const myCenter = new google.maps.LatLng(-33.874066, 151.207517);
//
    // function initialize() {
    //   const mapProp = {
    //       center: myCenter,
    //       zoom: 12,
    //       scrollwheel: false,
    //       draggable: false,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP,
    //     };
    //
    //   const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
//
    //   const marker = new google.maps.Marker({
    //       position: myCenter,
    //     });
//
    //   marker.setMap(map);
    // }
//
    // google.maps.event.addDomListener(window, 'load', initialize);
  }

  render() {
    return (
      <div>
        <script src="http://maps.googleapis.com/maps/api/js" />
        <script />
      </div>
     );
  }
}

export default Map;
