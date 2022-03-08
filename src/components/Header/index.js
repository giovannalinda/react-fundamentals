import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ThemeContext } from '../../context/ThemeContext'

import Button from '../Button'

const Title = styled.h1`
  color: purple;
`

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <div>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Change theme</Button>
      {props.children}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

Header.defaultProps = {
  title: 'Blog',
}