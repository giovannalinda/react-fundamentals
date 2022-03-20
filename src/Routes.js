import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
import Posts from './pages/Posts'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={Post} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}