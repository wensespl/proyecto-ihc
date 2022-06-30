import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { ColorModeContext } from '../../App'
import { startLogout } from '../../redux/actions/auth'

const pages = ['Login', 'Register']
const settings = ['Profile', 'Logout']

export const Appbar = () => {
  const dispatch = useDispatch()
  const { userId, name, role } = useSelector((state) => state.auth)
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  const handleLogout = () => {
    dispatch(startLogout())
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static">
        <Toolbar>
          {!!userId ? (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {role === 'PROFESOR_ROLE' ? (
                  <MenuItem key="crear" onClick={handleCloseNavMenu}>
                    <Button onClick={() => {}}>Crear</Button>
                  </MenuItem>
                ) : null}
                <MenuItem key="ver_curso" onClick={handleCloseNavMenu}>
                  <Button component={Link} to="/course">
                    Ver curso
                  </Button>
                </MenuItem>
                <MenuItem key="comentarios" onClick={handleCloseNavMenu}>
                  <Button component={Link} to="/comments">
                    Comentarios
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Button component={Link} to={`/auth/${page}`}>
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href={!!userId ? '/' : '/home'}
            sx={{
              mr: 5,
              display: 'flex',
              flexGrow: 0,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            UNI-Edu
          </Typography>

          {!!userId ? null : (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    component={Link}
                    to={`/auth/${page}`}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </>
          )}

          {!!userId ? (
            <>
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                {role === 'PROFESOR_ROLE' ? (
                  <Button
                    key="crear"
                    sx={{ color: 'white', display: 'block' }}
                    onClick={() => {}}
                  >
                    Crear
                  </Button>
                ) : null}

                <Button
                  key="ver_curso"
                  component={Link}
                  to="/course"
                  sx={{ color: 'white', display: 'block' }}
                >
                  Ver curso
                </Button>
                <Button
                  key="comentarios"
                  component={Link}
                  to="/comments"
                  sx={{ color: 'white', display: 'block' }}
                >
                  Comentarios
                </Button>
              </Box>
              <Box sx={{ flexGrow: 1, display: 'flex' }} />
              <IconButton
                sx={{ mr: 2 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={name} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={
                        setting === 'Logout'
                          ? handleLogout
                          : handleCloseUserMenu
                      }
                    >
                      <Button>{setting}</Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
