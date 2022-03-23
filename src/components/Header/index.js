import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

export default function Header({ onToggleTheme, selectedTheme }) {
  const history = useHistory()

  function handleNavigate() {
    history.push('/posts')
  }

  return (
    <Container>
      <h1>Blog</h1>
      <button 
        type="button" 
        onClick={onToggleTheme}
      >
        {selectedTheme === 'light' ? '🌙' : '☀️'}
      </button>
      <button onClick={handleNavigate} style={{ color: 'grey' }}>Navigate</button>
    </Container>
  );
}