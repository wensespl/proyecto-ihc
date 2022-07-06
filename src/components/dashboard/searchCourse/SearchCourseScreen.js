import React, { Component } from 'react';
//import './App.css';

import Typography from '@mui/material/Typography';
import CardCurso from '../course/CourseItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from './SearchBar';


function SearchCourseScreen() {
  return (
    <div bgcolor='#F8F8F8'>

      <Box
        mx={10}
        sx={{ minWidth: 275 , margin: 'auto'}}
        maxWidth='lg'
        alignItems='center'
        alignContent='center'
        margin='auto'
      >
            
        <Typography  variant='h4'  marginTop='30px' align='left'  paddingLeft='3%' paddingTop='2%' gutterBottom>
          Cursos populares
        </Typography>
        <Typography sx={{ fontSize: 18, color:'black'}} align='left'  paddingLeft='3%'  gutterBottom>
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
            <CardCurso/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCurso />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCurso />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCurso />
          </Grid>
        </Grid>
        <Typography variant='h4'  align='left'  paddingLeft='3%' paddingTop='2%'  marginTop='30px' gutterBottom>
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
            <CardCurso />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCurso />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CardCurso />
          </Grid>
        </Grid>
    
      </Box>

      <Box
        marginTop={5}
        paddingTop={5}
        bgcolor='white'
      >
          <Box sx={{ minWidth: 275 , margin: 'auto'}} margin='auto' alignItems='center'
            alignContent='center' >    
            <SearchBar border={1}></SearchBar>
        
          </Box> 
      
          <Box
            mx={10}
            sx={{ minWidth: 275 , margin: 'auto'}}
            maxWidth='lg'
            alignItems='center'
            alignContent='center'
            margin='auto'
          >
            
            <Typography sx={{ fontSize: 18, color:'black'}} align='left'  paddingLeft='3%'  marginTop={5} gutterBottom>
              Tecnologias de la Información
            </Typography>
        
            <Grid
              container
              spacing={4}
              paddingLeft="40px"
              paddingRight="40px"
              justify="center"
            >
              <Grid item xs={12} sm={6} md={4}>
                <CardCurso />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardCurso />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardCurso />
              </Grid>
            </Grid>
    
          </Box>

          <Box
            sx={{ height: 300}}
          >
            
            
          </Box>
    
      </Box>
    
    </div>
  );
}

export default SearchCourseScreen;
