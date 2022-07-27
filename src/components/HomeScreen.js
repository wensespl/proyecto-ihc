import { Container, Typography } from '@mui/material'
import React from 'react'

export const HomeScreen = () => {
  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h3" sx={{ marginBottom: 3 }}>
        comandos permitidos son las frases que contengan lo siguiente:
      </Typography>
      <Typography>“login”: Redirige a la página de login.</Typography>
      <Typography>“register”: Redirige a la página de registro.</Typography>
      <Typography>
        “home”: Redirige a la página de inicio dependiendo de si está logueado o
        no.
      </Typography>
      <Typography>“log out”: Cierra la sesión actual.</Typography>
      <Typography>
        “create new course”: Abre el modal con el formulario para crear un nuevo
        curso.
      </Typography>
      <Typography>
        “add new content”: Abre el modal con el formulario para añadir un nuevo
        contenido al curso.
      </Typography>
      <Typography>
        “my courses”: Redirige a la página principal (inicio) donde se muestran
        todos los cursos en los que estés añadido o hayas creado según tu rol
        correspondiente.
      </Typography>
      <Typography>
        “course content”: Redirige a la página del contenido del curso que estás
        viendo actualmente.
      </Typography>
      <Typography>
        “comments”: Redirige a la página de comentarios del curso que estás
        viendo actualmente.
      </Typography>
      <Typography>
        “search courses”: Redirige a la página de buscar cursos.
      </Typography>
    </Container>
  )
}
