import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { useDispatch } from 'react-redux'

import { useForm } from '../../../hooks/useForm'
import { buscarCourses } from '../../../redux/actions/course'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '300%',
    [theme.breakpoints.up('md')]: {
      width: '70ch'
    }
  }
}))

export default function BasicCard() {
  const dispatch = useDispatch()
  const [formValues, handleInputChange] = useForm({ text: '' })

  const { text } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(text)
    dispatch(buscarCourses())
  }

  return (
    <Card
      sx={{
        minWidth: 275,
        maxWidth: '1100px',
        margin: 'auto',
        display: 'flex',
        bgcolor: 'orange'
      }}
      mx={10}
      // maxWidth="lg"
      paddingLeft={5}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ minWidth: 275, flex: '1 0 auto' }}>
          <Typography
            variant="h5"
            align="left"
            paddingLeft="3%"
            fontWeight={600}
            marginTop={2}
          >
            Explora más de 30 cursos
          </Typography>
        </CardContent>
        <Box
          sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}
          marginLeft="3%"
        ></Box>
      </Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Search sx={{ height: 50, marginTop: 4 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={text}
              name="text"
              onChange={handleInputChange}
            />
          </Search>
        </form>

        <CardActions sx={{ display: 'flex' }}>
          <Typography
            variant="h6"
            align="left"
            paddingLeft="3%"
            marginRight={4}
          >
            Saltar a
          </Typography>

          <Button variant="contained" size="small">
            <Typography variant="subtitle2" align="left" paddingLeft="3%">
              Ciencias
            </Typography>
          </Button>
          <Button variant="contained" size="small">
            <Typography variant="subtitle2" align="left" paddingLeft="3%">
              Humanidades
            </Typography>
          </Button>
          <Button variant="contained" size="small">
            <Typography variant="subtitle2" align="left" paddingLeft="3%">
              Tecnología
            </Typography>
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
}
