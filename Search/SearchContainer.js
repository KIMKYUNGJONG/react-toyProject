import React from 'react';
import SearchPresenter from './SearchPresenter';
import { MoviesApi, TVApi } from 'c:/Users/rudwh/OneDrive/바탕 화면/react-toyProject-master/react-toyProject-master/src/api';

export default class extends React.Component {
  state= {
    movieResult: null,
    tvResult: null,
    searchTerm: '',
    error: null,
    loading: false
  }

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== '') {
      this.searchByTerm();
    }
  }
  updateTerm = event => {
    const { 
      target: { value } 
    } = event;
    console.log(value);
    this.setState({
      searchTerm: value
    });
  }
  searchByTerm = async () => {
    this.setState({
      loading: true
    });
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResult }
      } = await MoviesApi.searchMovie(searchTerm);
      const {
        data: { results: tvResult }
      } = await TVApi.searchTV(searchTerm);
      this.setState({
        movieResult,
        tvResult,
      });
    } catch (error) {
      this.setState({
        error: "can't find TV or Movie."
      });
    } finally {
      this.setState({
        searchTerm,
        loading: false
      });
    }
  }

  render() {
    const { movieResult, tvResult, error, loading, searchTerm } = this.state;
    return (
      <SearchPresenter 
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}