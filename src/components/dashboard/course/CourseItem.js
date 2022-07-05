import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography
} from '@mui/material'
import React from 'react'

export const CourseItem = () => {
  return (
    <Card minWidth="200" variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Icono
        </Typography>
        <Typography variant="h5" component="h2">
          Machine Learning
        </Typography>
        <Typography color="textSecondary">2/4 tareas realizadas</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
