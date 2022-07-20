import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BookIcon from '@mui/icons-material/Book'

import { setActiveCourse, startUnirse } from '../../../redux/actions/course'

export const CourseItem = ({ course }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSeeCourse = () => {
    dispatch(setActiveCourse(course))
    navigate('/course')
  }

  return (
    <Card sx={{ minWidth: 200 }} variant="outlined">
      <CardContent>
        {/* <Typography color="textSecondary" gutterBottom>
          Icono
        </Typography> */}
        <BookIcon />
        <Typography variant="h5" component="h2">
          {course?.name ? course.name : 'Nombre de curso'}
        </Typography>
        {/* <Typography color="textSecondary">2/4 tareas realizadas</Typography> */}
      </CardContent>
      <CardActions>
        {course?.joined ? (
          <Button
            key="ver_curso_page"
            onClick={handleSeeCourse}
            sx={{ display: 'block' }}
          >
            See course
          </Button>
        ) : (
          <Button
            key="unirse_curso"
            onClick={() => {
              dispatch(startUnirse(course.courseId))
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
