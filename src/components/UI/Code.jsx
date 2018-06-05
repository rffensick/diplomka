import React from 'react';
import styled from 'styled-components';

const CodeTag = styled.code`
  padding: 2px 4px;
  color: #d14;
  white-space: nowrap;
  background-color: #f7f7f9;
  border: 1px solid #e1e1e8;
`;

const Code = ({ children }) => {
  return <CodeTag>&lt;{children}&gt;</CodeTag>;
};

export default Code;
