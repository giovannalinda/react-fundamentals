import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: sans-serif;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }

  button {
    cursor: pointer;
  }

  &::selection {
    color: #222;
    background: #f1f1f1;
  }
`