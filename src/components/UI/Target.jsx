import React from 'react';
import styled from 'styled-components';

const Span1 = styled.span`
  font-size: 20px;
  background-color: #999;
  color: white;
  line-height: 50px;
  width: 92px;
  padding-left: 5px;
`;

const Span2 = styled.span`
  font-size: 20px;
  margin-left: 10px;
  user-select: none;
`;

const DivBorder = styled.div`
  border: 1px solid #618ad2;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: rgba(245, 245, 245, 0.95);
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
