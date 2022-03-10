import React from 'react'

import { Container } from './styles'

export default function Footer({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <span>Blog. All rights reserved.</span>
      <button 
        type="button" 
        onClick={onToggleTheme}
      >
        {selectedTheme === 'light' ? '🌙' : '☀️'}
      </button>
    </Container>
  );
}