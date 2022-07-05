import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetCourses } from '../../redux/actions/course'
import { CourseItem } from './course/CourseItem'

export const AppScreen = () => {
  const dispatch = useDispatch()
  const { role } = useSelector((state) => state.auth)
  const { courses } = useSelector((state) => state.course)

  useEffect(() => {
    dispatch(startGetCourses())
  }, [dispatch])

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {courses.map((curso) => (
          <Grid item xs={2} sm={4} md={4} key={curso}>
            <CourseItem />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
