import { Card, CardContent, CardHeader } from '@mui/material'
import moment from 'moment'
import React from 'react'

export const CommentItem = ({ comment }) => {
  return (
    <Card>
      <CardHeader
        title={comment.autor}
        subheader={moment(comment.fecha).format('MMM Do YYYY')}
      />
      <CardContent>{comment.texto}</CardContent>
    </Card>
  )
}
