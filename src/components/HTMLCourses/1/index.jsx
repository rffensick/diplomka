import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import CourseStatus from '../../UI/courseStatus';
import CharsetHTML from './CharsetHTML/CharsetHTML';
import DescriprionPage from './DescriptionPage/DescriptionPage';
import HTMLComments from './HTMLComments/HTMLComments';
import KeyWords from './KeyWords/KeyWords';
import Menu from './Menu/Menu';
import SimpleHTML from './SimpleHTML/SimpleHTML';
import TitleHTML from './TitleHTML/TitleHTML';

const StructureHTML = ({ match }) => {
  return (
    <Fragment>
      <Route exact path={match.url} component={Menu} />

      <Route
        path="/courses/basic-html/1/*"
        render={() => (
          <CourseStatus as="h3">
            × Курс «Структура HTML-документа»
            <Button
              primary
              as={Link}
              to="/courses/basic-html/1"
              animated="fade"
            >
              <Button.Content visible>Меню курса</Button.Content>
              <Button.Content hidden>
                <Icon name="right arrow" />
              </Button.Content>
            </Button>
          </CourseStatus>
        )}
      />

      <Switch>
        <Route path="/courses/basic-html/1/run/1" component={SimpleHTML} />
        <Route path="/courses/basic-html/1/run/2" component={TitleHTML} />
        <Route path="/courses/basic-html/1/run/3" component={CharsetHTML} />
        <Route path="/courses/basic-html/1/run/4" component={KeyWords} />
        <Route path="/courses/basic-html/1/run/5" component={DescriprionPage} />
        <Route path="/courses/basic-html/1/run/6" component={HTMLComments} />
      </Switch>
    </Fragment>
  );
};

export default StructureHTML;
