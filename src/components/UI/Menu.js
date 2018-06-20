import styled from 'styled-components'

export const Menu = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
  width: 600px;

  ul {
    text-align: center;
  }

  li {
    margin: 10px 0;
    display: flex;
    align-items: center;
    text-align: center;

    svg {
      width: 30px !important;
    }

    a {
      line-height: 1.1;
      margin-left: 10px;
      font-size: 30px;
      color: #1b1c1d;
    }
  }
`
