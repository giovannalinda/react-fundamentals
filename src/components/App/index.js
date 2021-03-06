import React, { useState } from 'react'

import Header from '../Header'
import Post from '../Post'

import { ThemeProvider } from '../../context/ThemeContext'

import { Title } from './styles'

// Props(Properties)
function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title #01', subtitle: 'Subtitle #01', likes: 20, read: true, removed: false },
    { id: Math.random(), title: 'Title #02', subtitle: 'Subtitle #02', likes: 10, read: true, removed: false },
    { id: Math.random(), title: 'Title #03', subtitle: 'Subtitle #03', likes: 50, read: false, removed: true  },
  ])

  function handleRefresh() {
    // will only access the value when it is updated
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(), 
        title: `Title #0${prevState.length + 1}`, 
        subtitle: `Subtitle #0${prevState.length + 1}`, 
        likes: 50,
      }
    ])
  }

  function handleRemovePost(id) {
    setPosts((prevState) => prevState.map(
      post => (
        post.id === id
          ? { ...post, removed: true }
          : post
      )
    ))
  }

  return (
    <ThemeProvider>
      <Header>
      <Title as="h2">
        <button onClick={() => handleRefresh()}>Refresh</button> 
      </Title> 
      </Header>

      <hr />

      {posts.map((post) => (
        <Post 
          key={post.id}
          onRemove={handleRemovePost}
          post={post} 
        />
      ))}
    </ThemeProvider>
  )
}

export default App