import { Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'

export const CommentItem = ({ comment }) => {
  return (
    <Card>
      <CardHeader title="Nombre" />
      <CardContent>Contenido del comentario</CardContent>
    </Card>
  )
}
