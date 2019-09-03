import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import Tv from 'Routes/Tv';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import Ht from 'Routes/Ht';

export default () => (
  <Router>
    <>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/tv" exact component={Tv} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/tv/:id" component={Detail} />
      <Route path="/Ht" component={Ht} />
      <Redirect from="*" to="/" />
    </Switch>
    </>
  </Router>

);