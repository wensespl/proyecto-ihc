import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startUnirse } from '../../../redux/actions/course'

export const CourseItem = ({ ...props }) => {
  const dispatch = useDispatch()

  return (
    <Card sx={{ minWidth: 200 }} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Icono
        </Typography>
        <Typography variant="h5" component="h2">
          {props.name ? props.name : 'Nombre de curso'}
        </Typography>
        {/* <Typography color="textSecondary">2/4 tareas realizadas</Typography> */}
      </CardContent>
      <CardActions>
        {/*<Button size="small">Learn More</Button>*/}
        <Button
          key="ver_curso_page"
          component={Link}
          to="/course"
          sx={{ display: 'block' }}
        >
          See course
        </Button>
        {props.joined ? null : (
          <Button
            key="unirse_curso"
            onClick={() => {
              dispatch(startUnirse(props.courseId))
            }}
            sx={{ display: 'block' }}
          >
            Join
          </Button>
        )}
      </CardActions>
    </Card>
  )
}
