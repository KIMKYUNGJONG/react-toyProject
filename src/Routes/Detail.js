import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 20vw;
`;
const FragDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export default class Test extends React.Component {
  componentDidMount() {
    const loadScript = function (src) {
      const tag = document.createElement('script');
      tag.async = false;
      tag.src = src;
      document.body.appendChild(tag);
    };
    loadScript('/libs/htTest.js');
  }
  render() {
    return (
      <FragDiv>
        <Nav> test </Nav>
        <Div id="canvas" />
      </FragDiv>
    );
  }
}
