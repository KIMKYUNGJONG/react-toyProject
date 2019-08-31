import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({ movieResult,
  tvResult,
  loading,
  error,
  searchTerm,
  handleSubmit }) => null;

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;