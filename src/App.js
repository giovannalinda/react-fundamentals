import React from 'react'

import Header from './Header'
import Post from './Post'

const category = 'Posts of the week'

const posts = [
  { title: 'Title #01', subtitle: 'Subtitle #01', likes: 20 },
  { title: 'Title #02', subtitle: 'Subtitle #02', likes: 10 },
  { title: 'Title #03', subtitle: 'Subtitle #03', likes: 50 },
]

// Props(Properties)
function App() {
  return (
    <>
      <Header>
      <h3>{category}</h3>  
      </Header>

      <hr />

      {posts.map((post) => (
        <Post 
          key={post.title}
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