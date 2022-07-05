import { Container, Grid, Typography } from '@mui/material'
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
      {/* <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {courses.map((curso) => (
          <Grid item xs={2} sm={4} md={4} key={curso}>
            <CourseItem />
          </Grid>
        ))}
      </Grid> */}
      <Typography
        sx={{ fontSize: 24, color: 'warning.main' }}
        align="left"
        paddingLeft="3%"
        paddingTop="2%"
        gutterBottom
      >
        Mis Cursos
      </Typography>
      <Grid
        container
        spacing={4}
        paddingLeft="40px"
        paddingRight="40px"
        justify="center"
      >
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.courseId}>
            <CourseItem />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
