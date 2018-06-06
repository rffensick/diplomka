import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import StructureHTML from '../../HTMLCourses/1';
import MenuHTML from '../../MenuHTML';

const BasicHTML = props => {
  const {
    match: { url }
  } = props;
  console.log(url);
  return (
    <Container>
      <Route exact path={url} render={MenuHTML} />

      <Switch>
        <Route path={`${url}/1`} component={StructureHTML} />
        <Route path={`${url}/2/run/1`} render={() => <h1>/2/run/1</h1>} />
        <Route path={`${url}/3/run/1`} render={() => <h1>/3/run/1</h1>} />
        <Route path={`${url}/4/run/1`} render={() => <h1>/4/run/1</h1>} />
        <Route path={`${url}/5/run/1`} render={() => <h1>/5/run/1</h1>} />
      </Switch>
    </Container>
  );
};

export default BasicHTML;
