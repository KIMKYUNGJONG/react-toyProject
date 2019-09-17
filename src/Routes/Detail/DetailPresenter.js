/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import './style.css';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  `;
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: .5;
  z-index: 0;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
`;
const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;
const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 10px;
`;
const ItemContainer = styled.div`
  margin: 20px 0;
`;
const Item = styled.span`
  .react-rater-star.is-active: {
    color: #fabc37;
  }
`;
const Divider = styled.span`
  margin: 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  opacity: .7;
  line-height: 1.5;
  width: 50%;
`;

const DetailPresenter = ({ results, loading, error }) => 
  loading ? (
    <>
    <Helmet>
      <title>Loading | Nomflix</title>
    </Helmet>
    <Loader />
    </>
  ) : 
    (
      <Container>
        <Helmet>
          <title>
            { 
              results.original_title 
                ? results.original_title
                : results.original_name
            } | Nomflix</title>
        </Helmet>
        <Backdrop 
          bgImage={`https://image.tmdb.org/t/p/original${results.backdrop_path}`} 
        />
        <Content>
          <Cover
            bgImage={
              results.poster_path 
                ? `https://image.tmdb.org/t/p/original${results.poster_path}` 
                : require('../../assets/noPosterSmall.png')
            }
          />
          <Data>
            <Title>
              { 
                results.original_title 
                  ? `${results.original_title} / ${results.title}` 
                  : `${results.original_name} / ${results.name}` 
              }
            </Title>
            <ItemContainer>
              <Item>
                {results.release_date 
                  ? results.release_date.substring(0, 4) 
                  : results.first_air_date.substring(0, 4)
                }
              </Item>
              <Divider>◽</Divider>
              <Item>
                {results.runtime 
                  ? results.runtime
                  : results.episode_run_time
                } min
              </Item>
              <Divider>◽</Divider>
              <Item>
                {results.genres && results.genres.map((genre, index) => index === results.genres.length - 1 ? genre.name : `${genre.name} / `)}
              </Item>
              <Divider>◽</Divider>
              <Item>
                <Rater rating={results.vote_average / 2} total={5} interactive={false} /> 
              </Item>
              <Divider />       
              <Item>
                {results.vote_average
                  ? `${results.vote_average} / 10`
                  : 'no rating'
                }
              </Item>   
            </ItemContainer>
            <Overview>{results.overview}</Overview>
          </Data>
        </Content>
      </Container>
    );

DetailPresenter.propTypes = {
  results: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;