import React from 'react';

import { Container } from './styles';

export default function Header({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <h1>Blog</h1>
      <button 
        type="button" 
        onClick={onToggleTheme}
      >
        {selectedTheme === 'light' ? '🌙' : '☀️'}
      </button>
    </Container>
  );
}