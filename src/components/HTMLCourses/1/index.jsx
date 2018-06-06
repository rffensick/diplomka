import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharsetHTML from './CharsetHTML/CharsetHTML';
import KeyWords from './KeyWords/KeyWords';
import Menu from './Menu/Menu';
import SimpleHTML from './SimpleHTML/SimpleHTML';
import TitleHTML from './TitleHTML/TitleHTML';

const StructureHTML = ({ match }) => {
  return (
    <Fragment>
      <Route exact path={match.url} component={Menu} />

      <Switch>
        <Route path="/courses/basic-html/1/run/1" component={SimpleHTML} />
        <Route path="/courses/basic-html/1/run/2" component={TitleHTML} />
        <Route path="/courses/basic-html/1/run/3" component={CharsetHTML} />
        <Route path="/courses/basic-html/1/run/4" component={KeyWords} />
      </Switch>
    </Fragment>
  );
};

export default StructureHTML;
