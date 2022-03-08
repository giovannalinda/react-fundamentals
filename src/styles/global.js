import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: sans-serif;
    background: #222;
    color: #f1f1f1;
  }

  button {
    cursor: pointer;
  }

  &::selection {
    color: #222;
    background: #f1f1f1;
  }
`