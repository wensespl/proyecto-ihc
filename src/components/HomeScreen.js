import { Container, Typography } from '@mui/material'
import React from 'react'

export const HomeScreen = () => {
  return (
    <Container>
      <Typography variant="h3">
        comandos permitidos son las frases que contengan lo siguiente:
      </Typography>
      <Typography variant="h5">
        “login”: Redirige a la página de login.
      </Typography>
      <Typography variant="h5">
        “register”: Redirige a la página de registro.
      </Typography>
      <Typography variant="h5">
        “home”: Redirige a la página de inicio dependiendo de si está logueado o
        no.
      </Typography>
      <Typography variant="h5">“log out”: Cierra la sesión actual.</Typography>
      <Typography variant="h5">
        “create new course”: Abre el modal con el formulario para crear un nuevo
        curso.
      </Typography>
      <Typography variant="h5">
        “add new content”: Abre el modal con el formulario para añadir un nuevo
        contenido al curso.
      </Typography>
      <Typography variant="h5">
        “my courses”: Redirige a la página principal (inicio) donde se muestran
        todos los cursos en los que estés añadido o hayas creado según tu rol
        correspondiente.
      </Typography>
      <Typography variant="h5">
        “course content”: Redirige a la página del contenido del curso que estás
        viendo actualmente.
      </Typography>
      <Typography variant="h5">
        “comments”: Redirige a la página de comentarios del curso que estás
        viendo actualmente.
      </Typography>
      <Typography variant="h5">
        “search courses”: Redirige a la página de buscar cursos.
      </Typography>
    </Container>
  )
}
