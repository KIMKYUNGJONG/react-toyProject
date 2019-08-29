import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import Search from 'Routes/Search';
import Tv from 'Routes/Tv';
import Detail from 'Routes/Detail';

export default () => (
  <Router>
    <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/detail" component={Detail} />
      {/*<Route path="/tv/popular" render={()=><h1>popular</h1>} />*/}
      <Redirect from="*" to="/" />
    </Switch>
    </>
  </Router>

);