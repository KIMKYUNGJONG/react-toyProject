import React from 'react';
import DetailPresenter from './DetailPresenter';
import { MoviesApi, TVApi } from '../../api';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = this.props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/')
    };
  }
  async componentDidMount() {
    const {
      match: { 
        params: { id } 
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedID = parseInt(id);
    if (isNaN(parsedID)) {
      return push('/');
    }
    let results = null;
    try {
      if (isMovie) {
        ({ data: results } = await MoviesApi.movieDetail(parsedID));
      } else {
        ({ data: results } = await TVApi.showDetail(parsedID));
      }
      console.log(results);
    } catch (error) {
      this.setState({
        error: "can't Find Results"
      });
    } finally {
      this.setState({
        loading: false,
        results
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;

    return (
      <DetailPresenter 
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}