import React, { PropTypes } from 'react';
import { SocialIcon } from 'react-social-icons';
// import { Link } from 'react-router';
import TopMenu from './TopMenu';
import PhotoCarousel from './PhotoCarousel';
import About from './About';
import Music from './Music';
import Albums from './Albums';
import Singles from './Singles';
import Tour from './Tour';
import TwoWheeledChronicles from './TwoWheeledChronicles';
import Contacts from './Contacts';
import Map from './Map';

import dataUk from '../data/dataUk.json';
import dataEn from '../data/dataEn.json';

function HomePage(props) {
  let data = {};
  if (props.params.lang === 'uk') {
    data = dataUk;
  } else {
    data = dataEn;
  }

  return (
    <div>
      <TopMenu data={data.topMenu} lang={props.params.lang} />
      <div style={{ height: 150, width: 35, position: 'fixed', top: 150, left: 5, zIndex: 100 }}>
        { /* <div className="divSocialIcon"> */}
        <SocialIcon
          url="https://www.facebook.com/Folknery-216515431724924/"
          style={{ height: 35, width: 35, marginBottom: 5 }}
          color="gray"
        />
        <SocialIcon
          url="https://twitter.com/Folknery"
          style={{ height: 35, width: 35, marginBottom: 5 }}
          color="gray"
        />
        <SocialIcon
          url="https://www.instagram.com/folknery/"
          style={{ height: 35, width: 35, marginBottom: 5 }}
          color="gray"
        />
        <SocialIcon
          url="https://www.youtube.com/user/Folknery"
          style={{ height: 35, width: 35, marginBottom: 5 }}
          color="gray"
        />
        <SocialIcon
          url="https://soundcloud.com/folknery"
          style={{ height: 35, width: 35, marginBottom: 5 }}
          color="gray"
        />
        <SocialIcon
          url="https://itunes.apple.com/ca/artist/folknery/id1123854330"
          style={{ height: 35, width: 35, marginBottom: 5 }}
          color="gray"
        />
        <SocialIcon
          url="https://play.google.com/store/music/artist/Folknery?id=A6vostbtw6b7n3nmstbk2flpq5e"
          style={{ height: 35, width: 35, marginBottom: 5 }}
          color="gray"
        />
        {/* <SocialIcon
            url="https://www.facebook.com/Folknery-216515431724924/"
            className="socIcon"
            />
          <SocialIcon
            url="https://twitter.com/Folknery"
            className="socIcon"
            />
          <SocialIcon
            url="https://www.instagram.com/folknery/"
            className="socIcon"
            />
          <SocialIcon
            url="https://www.youtube.com/user/Folknery"
            className="socIcon"
            />
          <SocialIcon
            url="https://soundcloud.com/folknery"
            className="socIcon"
            />
          <SocialIcon
            url="https://itunes.apple.com/ca/artist/folknery/id1123854330"
            className="socIcon"
            />
          <SocialIcon
            url="https://play.google.com/store/music/artist/Folknery?id=A6vostbtw6b7n3nmstbk2flpq5e"
            className="socIcon"
            />
        </div>*/}
      </div>
      <PhotoCarousel data={data.carousel} />
      <About data={data.about} />
      <Music {...data.music} />
      <Albums {...data.albums} />
      <Singles data={data.singles} />
      <Tour data={data.tour} />
      <TwoWheeledChronicles data={data.twoWheeledChronicles} />
      <Contacts data={data.contacts} />
      <Map />
    </div>
  );
}

// <script>
//     $(document).ready(function () {
//         // Add smooth scrolling to all links in navbar + footer link
//         $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
//
//             // Make sure this.hash has a value before overriding default behavior
//             if (this.hash !== "") {
//
//                 // Prevent default anchor click behavior
//                 event.preventDefault();
//
//                 // Store hash
//                 var hash = this.hash;
//
//                 // Using jQuery's animate() method to add smooth page scroll
//                 // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//                 $('html, body').animate({
//                     scrollTop: $(hash).offset().top
//                 }, 900, function () {
//
//                     // Add hash (#) to URL when done scrolling (default click behavior)
//                     window.location.hash = hash;
//                 });
//             } // End if
//         });
//     })
// </script>
//

HomePage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default HomePage;
