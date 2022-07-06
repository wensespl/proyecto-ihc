import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system'
import React from 'react'

export const Baner = () => {
  const { name } = useSelector((state) => state.auth)

  return (
    <Card
      sx={{ minWidth: 275, margin: 10, display: 'flex' }}
      margin="20px 10px 20px 10px"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ minWidth: 275, border: 1, flex: '1 0 auto' }}>
          <Typography
            sx={{ fontSize: 20 }}
            color="text.secondary"
            align="left"
            paddingLeft="3%"
            paddingTop="2%"
            gutterBottom
          >
            Hola, {!!name ? name : 'Usuario'}
          </Typography>
          <Typography variant="h3" align="left" paddingLeft="3%">
            Elige y empieza a aprender un nuevo tema
          </Typography>
        </CardContent>
        <Box
          sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
          marginLeft="3%"
        >
          <CardActions sx={{ display: 'flex' }}>
            <Button variant="contained" size="small">
              <Typography variant="subtitle2" align="left" paddingLeft="3%">
                Empezar
              </Typography>
            </Button>
          </CardActions>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image="https://findstack.com/wp-content/uploads/2021/03/The-Ultimate-List-of-E-Learning-Statistics-1-800x450.jpg"
        alt="Paella dish"
        border={1}
        bgcolor="blue"
      />
    </Card>
  )
}
