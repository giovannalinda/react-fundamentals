import React from 'react'

import Header from './Header'
import Post from './Post'

const category = 'Posts of the week'

// Props(Properties)
function App() {
  return (
    <>
      <Header>
      <h3>{category}</h3>  
      </Header>

      <hr />

      <Post 
        likes={20}
        post={{
          title: 'News 01',
          subtitle: 'Subtitle 01'
        }}
      />
      <Post 
        likes={30}
        post={{
          title: 'News 02',
          subtitle: 'Subtitle 02'
        }}
      />
      <Post 
        likes={10}
        post={{
          title: 'News 03',
          subtitle: 'Subtitle 03'
        }}
      />
    </>
  )
}

export default App