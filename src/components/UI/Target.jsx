import React from 'react';
import styled from 'styled-components';

const Span1 = styled.span`
  font-size: 20px;
  background-color: lightgreen;
  color: black;
  line-height: 62.5px;
  display: flex;
  flex-basis: 10%;
  justify-content: center;
`;

const Span2 = styled.span`
  font-size: 20px;
  margin-left: 10px;
  user-select: none;
  line-height: 1.5;
  flex-basis: 85%;
`;

const DivBorder = styled.div`
  border: 1px solid #618ad2;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  flex-wrap: wrap;
  background-color: rgba(245, 245, 245, 0.95);
  margin-bottom: 10px;
`;

const Target = props => {
  return (
    <DivBorder>
      <Span1>- {props.step}</Span1>
      <Span2>{props.children}</Span2>
    </DivBorder>
  );
};

export default Target;
