import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 90px);
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export default () => <Container><ReactLoading type="bubbles" color="#fabc37" /></Container>;
