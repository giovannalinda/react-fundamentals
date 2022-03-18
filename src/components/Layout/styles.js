import styled from 'styled-components'

export const Nav = styled.nav`
  background: #000;
  margin: 16px 0 0 0;
  padding: 16px;
  border-radius: 4px;

  a {
    color: #fff;
    text-decoration: none;
    
    & + a {
      margin-left: 16px;
    }
  }
`