import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './PostHeader'

import * as S from './styles'

export default function Post(props) {
  return (
    <S.Container removed={props.post.removed}>
      <PostHeader 
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <S.Subtitle>{props.post.subtitle}</S.Subtitle>
      <S.Rate>Likes: {props.post.likes / 2}</S.Rate>
    </S.Container>
  )
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    deleted: PropTypes.bool.isRequired,
  }).isRequired,
}