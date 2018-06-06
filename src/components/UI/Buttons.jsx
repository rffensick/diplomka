import React from 'react';
import { Link } from 'react-router-dom';
import { Button as SemaButton } from 'semantic-ui-react';

const Button = props => {
  return (
    <SemaButton inverted color={props.color} to={props.to} as={Link}>
      {props.children}
    </SemaButton>
  );
};

export default Button;
