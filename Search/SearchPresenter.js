import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';

const Container = styled.div`
padding: 0 20px;
`;
const Form = styled.form`
margin-bottom: 50px;
width: 100%;
`;
const Input = styled.input`
all: unset;
font-size: 28px;
width: 100%;
`;

const SearchPresenter = ({ movieResult,
  tvResult,
  loading,
  error,
  searchTerm,
  handleSubmit,
  updateTerm }) => 
  (<Container onSubmit={handleSubmit}>
    <Form>
      <Input placeholder="Search Movies or Show..." value={searchTerm} onChange={updateTerm} />
    </Form>
    {loading ? <Loader /> : 
    <>
    {
      movieResult && movieResult.length > 0 && 
      <Section title="Movie Result">
        {movieResult.map(movie=>(<span key={movie.id}>{movie.title}</span>))}
      </Section>
    }
    {
      tvResult && tvResult.length > 0 && 
      <Section title="TvShow result">
        {tvResult.map(tvShow=>(<span key={tvShow.id}>{tvShow.name}</span>))}
      </Section>
    }    
    {error && <Message color="#e74c3c" text={error} />}
    { tvResult &&
      movieResult &&
      tvResult.length === 0 &&
      movieResult.length === 0 && (
      <Message text="Nothing found" color="#95a5a6" />
    )}
    </>
    }
  </Container>);

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;