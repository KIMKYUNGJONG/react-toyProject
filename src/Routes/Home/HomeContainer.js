import React from 'react';
import HomePresenter from './HomePresenter';
import { MoviesApi } from '../../api';

export default class extends React.Component {
  state={
    nowPlaying: null,
    popular: null,
    upcoming: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { 
        data: { results: nowPlaying }
      } = await MoviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await MoviesApi.upcoming();
      const {
        data: { results: popular }
      } = await MoviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch (error) {
      this.setState({
        error: "can't find Movies Information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  
  render() {
    const { nowPlaying, popular, upcoming, error, loading } = this.state;
    console.log(this.state);
    return (
      <HomePresenter 
        nowPlaying={nowPlaying} 
        popular={popular} 
        upcoming={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}