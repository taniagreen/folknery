import React, { PropTypes } from 'react';

import HomePage from './HomePage';
import { getData } from '../api/api';

class HomePageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.setDataFromApi = this.setDataFromApi.bind(this);
    this.onLangChange = this.onLangChange.bind(this);
  }

  componentDidMount() {
    this.setDataFromApi(this.props.params.lang);
  }

  onLangChange(lang) {
    this.setDataFromApi(lang);
  }

  setDataFromApi(lang) {
    getData(lang || 'en').then((data) => {
      this.setState(data);
    });
  }

  render() {
    const homePage = (this.state && this.state.data)
      ? <HomePage onLangChange={this.setDataFromApi} data={this.state.data} lang={this.props.params.lang || 'en'} />
      : <div />;
    return (homePage);
  }
}

HomePageContainer.propTypes = {
  params: PropTypes.object.isRequired,
};

export default HomePageContainer;
