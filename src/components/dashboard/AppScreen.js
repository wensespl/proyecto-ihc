import { Container, Grid } from '@mui/material'
import React from 'react'
import { CourseItem } from './course/CourseItem'

export const AppScreen = () => {
  const cursos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {cursos.map((curso) => (
          <Grid item xs={2} sm={4} md={4} key={curso}>
            <CourseItem />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
