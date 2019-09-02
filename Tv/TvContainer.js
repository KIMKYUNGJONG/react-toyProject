import React from 'react';
import TvPresenter from './TvPresenter';
import { TVApi } from 'c:/Users/rudwh/OneDrive/바탕 화면/react-toyProject-master/react-toyProject-master/src/api';

export default class extends React.Component {
  state= {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  }
  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await TVApi.topRated();
      const {
        data: { results: popular }
      } = await TVApi.popular();
      const {
        data: { results: airingToday }
      } = await TVApi.airingToday();
      this.setState({
        topRated,
        popular,
        airingToday
      });
    } catch (error) {
      this.setState({
        error: "can't find Tv shows"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { topRated, popular, airingToday, error, loading } = this.state;
    console.log(this.state);
    return (
      <TvPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}