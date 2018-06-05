import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, GridColumn, Header } from 'semantic-ui-react';
import { PText, SlyledContainer, StyledSection } from './Styles';

const HomePage = () => {
  return (
    <StyledSection>
      <SlyledContainer>
        <Header textAlign="center" as="h1">
          Современный учебник HTML/CSS/Javascript
        </Header>
        <PText>
          Перед вами учебник по HTML/CSS/Javascript, начиная с основ, включающий
          в себя много тонкостей и фишек HTML/CSS/Javascript.
        </PText>
        <Grid style={{ marginTop: '30px' }} stackable columns={3} divided>
          <GridColumn>
            <Header textAlign="center" as="h3">
              HTML
            </Header>
            <PText>Основы HTML</PText>
            <Button
              as={Link}
              to="courses/basic-html"
              fluid
              inverted
              color="orange"
            >
              Начать курс
            </Button>
          </GridColumn>
          <GridColumn>
            <Header textAlign="center" as="h3">
              CSS
            </Header>
            <PText>Основы CSS</PText>
            <Button disabled color="violet" inverted fluid>
              Начать курс
            </Button>
          </GridColumn>
          <GridColumn>
            <Header textAlign="center" as="h3">
              Javascript
            </Header>
            <PText>Основы Javascript</PText>
            <Button disabled inverted color="green" fluid>
              Начать курс
            </Button>
          </GridColumn>
        </Grid>
      </SlyledContainer>
    </StyledSection>
  );
};

export default HomePage;
