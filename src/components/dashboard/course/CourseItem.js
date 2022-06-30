import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader
} from '@mui/material'
import React from 'react'

export const CourseItem = () => {
  return (
    <Card sx={{ minWidth: 250, maxWidth: 300 }}>
      <CardHeader title="Titulo" />
      <CardContent>Contenido</CardContent>
      <CardActions>
        <Button size="small">Unirse</Button>
      </CardActions>
    </Card>
  )
}
