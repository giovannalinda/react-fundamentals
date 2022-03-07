import React, { useState } from 'react'

import Header from './Header'
import Post from './Post'

const category = 'Posts of the week'

// Props(Properties)
function App() {
  const [theme, setTheme] = useState('dark')

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title #01', subtitle: 'Subtitle #01', likes: 20, read: true },
    { id: Math.random(), title: 'Title #02', subtitle: 'Subtitle #02', likes: 10, read: true },
    { id: Math.random(), title: 'Title #03', subtitle: 'Subtitle #03', likes: 50, read: false },
  ])

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark' 
        ? 'light' 
        : 'dark'
    ))
  }

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
    setPosts(prevState => prevState.filter(post => post.id !== id))
  }

  return (
    <>
      <Header 
        theme={theme}
        onToggleTheme={handleToggleTheme} 
      >
      <h3>
        {category}
        <button onClick={() => handleRefresh()}>Refresh</button> 
      </h3> 
      </Header>

      <hr />

      {posts.map((post) => (
        <Post 
          key={post.id}
          onRemove={handleRemovePost}
          post={post} 
          theme={theme}
        />
      ))}
    </>
  )
}

export default App