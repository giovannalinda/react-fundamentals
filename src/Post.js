import React from 'react'

import PropTypes from 'prop-types'
import PostHeader from './PostHeader'

export default function Post(props) {
  return (
    <>
      <article>
        <PostHeader 
          onRemove={props.onRemove}
          theme={props.theme}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Likes: {props.post.likes / 2}
      </article>
      <br />
    </>
  )
}

Post.propTypes = {
  theme: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}