import React, { useContext } from 'react'

import PropTypes from 'prop-types'

import { ThemeContext } from './ThemeContext'

import Button from './Button'

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <div 
      style={{
        background: '#f2f2f2', 
        padding: '30px', 
        fontFamily: 'sans-serif'
      }}
    >
      <h1>{props.title}</h1>
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