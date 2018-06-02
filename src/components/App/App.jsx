import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from '../common/containers/Content/Content';
import NavBar from '../common/containers/NavBar';
import HomePage from '../pages/HomePage/HomePage';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Content>
    </Fragment>
  );
};

export default App;
