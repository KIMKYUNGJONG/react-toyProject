import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from '../../Components/Loader';

const Container = styled.div`
  padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) => loading ? <Loader /> : 
  <Container>
    {nowPlaying && nowPlaying.length > 0 && 
    <Section title="nowPlaying">
      {nowPlaying.map((movie)=><span key={movie.id}>{movie.title}</span>)}
    </Section>
    }
    {popular && popular.length > 0 && 
    <Section title="popular">
      {popular.map((movie)=><span key={movie.id}>{movie.title}</span>)}
    </Section>
    }
    {upcoming && upcoming.length > 0 && 
    <Section title="upcoming">
      {upcoming.map((movie)=><span key={movie.id}>{movie.title}</span>)}
    </Section>
    }
  </Container>;

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;