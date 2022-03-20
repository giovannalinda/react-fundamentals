import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default function Post() {
  const { search } = useLocation()
  const queryParams = useMemo(() => new URLSearchParams(search), [search])

  console.log(queryParams.get('myQuery'))

  return <h1>Post</h1>
}