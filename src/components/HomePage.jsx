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
import Footer from './Footer';
// import Map from './Map';

function HomePage(props) {
  return (
    <div>
      <TopMenu data={props.data.topMenu} lang={props.lang} onLangChange={props.onLangChange} />
      <div className="visible-lg" style={{ height: 150, width: 35, position: 'fixed', top: 100, left: 5, zIndex: 100 }}>
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
      </div>
      <PhotoCarousel data={props.data.carousel} />
      <About data={props.data.about} />
      <Music {...props.data.music} />
      <Albums {...props.data.albums} />
      <Singles {...props.data.singles} />
      <Tour data={props.data.tour} />
      <TwoWheeledChronicles data={props.data.twoWheeledChronicles} />
      <Contacts data={props.data.contacts} />
      {
        // <Map data={props.data.map} />
      }
      <Footer text={props.data.footerText} />
      <div className="container visible-sm visible-md visible-xs" style={{ height: 35, width: 275 }}>
        <SocialIcon
          url="https://www.facebook.com/Folknery-216515431724924/"
          style={{ height: 35, width: 35, marginRight: 4 }}
          color="#555"
        />
        <SocialIcon
          url="https://twitter.com/Folknery"
          style={{ height: 35, width: 35, marginRight: 4 }}
          color="#555"
        />
        <SocialIcon
          url="https://www.instagram.com/folknery/"
          style={{ height: 35, width: 35, marginRight: 4 }}
          color="#555"
        />
        <SocialIcon
          url="https://www.youtube.com/user/Folknery"
          style={{ height: 35, width: 35, marginRight: 4 }}
          color="#555"
        />
        <SocialIcon
          url="https://soundcloud.com/folknery"
          style={{ height: 35, width: 35, marginRight: 4 }}
          color="#555"
        />
        <SocialIcon
          url="https://itunes.apple.com/ca/artist/folknery/id1123854330"
          style={{ height: 35, width: 35, marginRight: 4 }}
          color="#555"
        />
        <SocialIcon
          url="https://play.google.com/store/music/artist/Folknery?id=A6vostbtw6b7n3nmstbk2flpq5e"
          style={{ height: 35, width: 35 }}
          color="#555"
        />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
};

export default HomePage;
