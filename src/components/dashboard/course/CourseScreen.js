import React, { Component } from 'react';
//import './App.css';

//import AppBar from './components/AppBar';
//import Card from './components/Card';
import Typography from '@mui/material/Typography';
//import CardCurso from './components/CardCurso';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Accordion from '../course/AccordionItem';
import ListItem from './components/listItem';



function CourseScreen() {
  return (
    <div >

      <Box
        mx={10}
        sx={{ minWidth: 275 , margin: 'auto'}}
        maxWidth='lg'
        alignItems='center'
        alignContent='center'
        margin='auto'
      >
            
        <Typography sx={{ fontSize: 18, color:'black'}} align='left'  paddingLeft='3%'  marginTop={2} gutterBottom>
          Regresar a Cursos
        </Typography>
          
        <Typography variant='h2' fontWeight={500}  paddingLeft='3%' paddingTop='2%'  marginTop='30px' gutterBottom>
          Computación Gráfica
        </Typography>
        <Typography variant='h5'>
        Aprenda los fundamentos sobre Computación Gráfica y aplicaciones
        </Typography>
        <Typography>
        Este curso proporciona una introducción a los algoritmos de gráficos por computadora, software y hardware. Los temas incluyen: trazado de rayos, canalización de gráficos, transformaciones, mapeo de texturas, sombras, muestreo, iluminación global, splines, animación y color.
        </Typography>
       
    
      </Box>

      <Box
        marginTop={5}
        paddingTop={5}
        bgcolor='white'
      >
          
      
          <Box
            mx={10}
            sx={{ minWidth: 275 , margin: 'auto'}}
            maxWidth='lg'
            alignItems='center'
            alignContent='center'
            margin='auto'
          >
            
            <Typography sx={{ fontSize: 18, color:'black'}} align='left'  paddingLeft='2%'  marginTop={5} marginBottom={5} gutterBottom>
              Contenido del Curso
            </Typography>
        
          
        
            

            <Accordion></Accordion>
        
    
          </Box>

          <Box
            sx={{ height: 300}}
          >
            
            
          </Box>
    
      </Box>
    
    </div>
  );
}

export default CourseScreen;
