import React, { useState } from 'react'

import Header from './Header'
import Post from './Post'

const category = 'Posts of the week'

// Props(Properties)
function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title #01', subtitle: 'Subtitle #01', likes: 20 },
    { id: Math.random(), title: 'Title #02', subtitle: 'Subtitle #02', likes: 10 },
    { id: Math.random(), title: 'Title #03', subtitle: 'Subtitle #03', likes: 50 },
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

  return (
    <>
      <Header>
      <h3>
        {category}
        <button onClick={() => handleRefresh()}>Refresh</button> 
      </h3> 
      </Header>

      <hr />

      {posts.map((post) => (
        <Post 
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }} />
      ))}
    </>
  )
}

export default App