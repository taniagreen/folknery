import React, { PropTypes } from 'react';

import HomePage from './HomePage';
// import { getData } from '../api/api';

import dataUk from '../data/dataUk.json';
import dataEn from '../data/dataEn.json';

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.setDataFromApi = this.setDataFromApi.bind(this);
    this.onLangChange = this.onLangChange.bind(this);
  }

  componentDidMount() {
    // this.setDataFromApi(this.props.params.lang);
  }

  onLangChange(lang) {
    this.setDataFromApi(lang);
  }

  setDataFromApi(lang) {
    const self = this;
    if (lang === 'uk') {
      self.setState({ data: dataUk });
    } else {
      self.setState({ data: dataEn });
    }

    // Server side part
    // getData(lang || 'en').then((data) => {
    //   self.setState(data);
    // }).catch((error) => {
    //   console.dir(error);
    //   if (lang === 'uk') {
    //     self.setState({ data: dataUk });
    //   } else {
    //     self.setState({ data: dataEn });
    //   }
    // });
  }

  render() {
    const data = this.props.params.lang === 'uk' ? dataUk : dataEn;
    const homePage = data
      ? <HomePage onLangChange={this.setDataFromApi} data={data} lang={this.props.params.lang || 'en'} />
      : <div />;
    return (homePage);
  }
}

HomePageContainer.propTypes = {
  params: PropTypes.object.isRequired,
};

export default HomePageContainer;
