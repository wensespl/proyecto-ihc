import { Container } from '@mui/material'
import React from 'react'
import { CommentItem } from './CommentItem'

export const CommentsScreen = () => {
  const comments = [1, 2, 3, 4, 5, 6]
  return (
    <Container>
      {comments.map((comment) => (
        <CommentItem key={comment} />
      ))}
    </Container>
  )
}
