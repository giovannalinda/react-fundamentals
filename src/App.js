import React from 'react'

import Header from './Header'
import Post from './Post'

const category = 'Posts of the week'

// Props(Properties)
function App() {
  return (
    <>
      <Header title='Blog'>
      <h3>{category}</h3>  
      </Header>

      <hr />

      <Post 
        post={{
          title: 'News 01',
          subtitle: 'Subtitle 01'
        }}
      />
      <Post 
        post={{
          title: 'News 02',
          subtitle: 'Subtitle 02'
        }}
      />
      <Post 
        post={{
          title: 'News 03',
          subtitle: 'Subtitle 03'
        }}
      />
    </>
  )
}

export default App