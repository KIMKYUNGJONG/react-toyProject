import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// 스타일 컴포넌트 스타일 지정
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, .8);
  z-index: 10;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, .8);
`;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${props => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom .5s ease-in-out;
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// withRouter를 통해 Props를 건네 받는다
export default withRouter(({ location: { pathname } }) => (
  <Header className="nav"> 
    <List>
      <Item current={pathname === '/'}>
        <SLink to="/">HOME</SLink>
      </Item>
      <Item current={pathname === '/search'}>
        <SLink to="/search">Search</SLink>
      </Item>
      <Item current={pathname === '/show'}>
        <SLink to="/show">TV</SLink>
      </Item>
      {/* <Item current={pathname === '/hooks'}>
        <SLink to="/hooks">Hooks</SLink>
      </Item> */}
    </List>
  </Header>
));