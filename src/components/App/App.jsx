import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Content from '../common/containers/Content/Content';
import NavBar from '../common/containers/NavBar';
import BasicHTML from '../pages/BasicHTML';
import HomePage from '../pages/HomePage/HomePage';

const App = () => {
  return (
    <Fragment>
      <NavBar />

      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses/basic-html" component={BasicHTML} />
        </Switch>
      </Content>
    </Fragment>
  );
};

export default App;
