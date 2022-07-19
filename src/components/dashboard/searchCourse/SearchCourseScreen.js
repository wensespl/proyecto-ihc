import React from 'react'
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { CourseItem } from '../course/CourseItem'
import SearchBar from './SearchBar'

function SearchCourseScreen() {
  const { busqueda } = useSelector((state) => state.course)

  return (
    <div>
      <Box
        mx={10}
        sx={{ minWidth: 275, margin: 'auto' }}
        maxWidth="lg"
        alignItems="center"
        alignContent="center"
        margin="auto"
      >
        <Typography
          variant="h4"
          marginTop="30px"
          align="left"
          paddingLeft="3%"
          paddingTop="2%"
          gutterBottom
        >
          Cursos populares
        </Typography>
        <Typography
          sx={{ fontSize: 18, color: 'black' }}
          align="left"
          paddingLeft="3%"
          gutterBottom
        >
          Populares con nuestros usuarios en el último mes
        </Typography>
        <Grid
          container
          spacing={4}
          paddingLeft="40px"
          paddingRight="40px"
          justify="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <CourseItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CourseItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CourseItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CourseItem />
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          align="left"
          paddingLeft="3%"
          paddingTop="2%"
          marginTop="30px"
          gutterBottom
        >
          Recomendado para estudiantes como tú
        </Typography>
        <Grid
          container
          spacing={4}
          paddingLeft="40px"
          paddingRight="40px"
          justify="center"
        >
          <Grid item xs={12} sm={6} md={4}>
            <CourseItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CourseItem />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CourseItem />
          </Grid>
        </Grid>
      </Box>

      <Box marginTop={5} paddingTop={5} bgcolor="white">
        <Box
          sx={{ minWidth: 275, margin: 'auto' }}
          margin="auto"
          alignItems="center"
          alignContent="center"
        >
          <SearchBar border={1} />
        </Box>

        <Box
          mx={10}
          sx={{ minWidth: 275, margin: 'auto' }}
          maxWidth="lg"
          alignItems="center"
          alignContent="center"
          margin="auto"
        >
          {/* <Typography
            sx={{ fontSize: 18, color: 'black' }}
            align="left"
            paddingLeft="3%"
            marginTop={5}
            gutterBottom
          >
            Tecnologias de la Información
          </Typography> */}

          <Grid
            container
            spacing={4}
            paddingLeft="40px"
            paddingRight="40px"
            marginTop={2}
            justify="center"
          >
            {busqueda.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.courseId}>
                <CourseItem course={course} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ height: 300 }}></Box>
      </Box>
    </div>
  )
}

export default SearchCourseScreen
