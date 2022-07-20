import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Accordion from '../course/AccordionItem'
import { useSelector } from 'react-redux'
import { AddModal } from '../../modals/AddModal'

export const CourseScreen = () => {
  const { activeCourse } = useSelector((state) => state.course)
  console.log(activeCourse)
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
        {/* <Typography
          sx={{ fontSize: 18, color: 'black' }}
          align="left"
          paddingLeft="3%"
          marginTop={2}
          gutterBottom
        >
          Regresar a Cursos
        </Typography> */}

        <Typography
          variant="h2"
          fontWeight={500}
          paddingLeft="3%"
          paddingTop="2%"
          marginTop="30px"
          gutterBottom
        >
          {activeCourse?.name ? activeCourse.name : 'Nombre del Curso'}
        </Typography>
        <Typography variant="h5">
          Aprenda los fundamentos sobre Computación Gráfica y aplicaciones
        </Typography>
        <Typography>
          Este curso proporciona una introducción a los algoritmos de gráficos
          por computadora, software y hardware. Los temas incluyen: trazado de
          rayos, canalización de gráficos, transformaciones, mapeo de texturas,
          sombras, muestreo, iluminación global, splines, animación y color.
        </Typography>
      </Box>

      <Box marginTop={5} paddingTop={5} bgcolor="white">
        <Box
          mx={10}
          sx={{ minWidth: 275, margin: 'auto' }}
          maxWidth="lg"
          alignItems="center"
          alignContent="center"
          margin="auto"
        >
          <Typography
            sx={{ color: 'black' }}
            variant="h4"
            align="left"
            paddingLeft="2%"
            marginTop={5}
            marginBottom={5}
            gutterBottom
          >
            Content:
          </Typography>

          <Accordion content={activeCourse.contenido} />
        </Box>

        <Box sx={{ height: 300 }}></Box>
        <AddModal />
      </Box>
    </div>
  )
}
