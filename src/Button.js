import React from 'react'

import PropTypes from 'prop-types'

export default function Button(props) {
  console.log(props.theme)

  const theme = props.theme
  
  return (
    <button 
      onClick={props.onClick}
      style={{
        color: theme === 'dark' ? '#fff' : '#000',
        background: theme === 'dark' ? '#000' : '#fff',
      }}
    >
      {props.children}  
    </button>
  )
}

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}