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
import { openAddModal, openCrearModal } from '../../redux/actions/ui'

const pages = ['Login', 'Register']
const settings = ['Profile', 'Logout']

export const Appbar = () => {
  const dispatch = useDispatch()
  const { userId, name, role } = useSelector((state) => state.auth)
  const { activeCourse } = useSelector((state) => state.course)
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
                {role === 'PROFESOR_ROLE' && !!activeCourse ? (
                  <MenuItem key="añadir" onClick={handleCloseNavMenu}>
                    <Button
                      onClick={() => {
                        dispatch(openAddModal())
                      }}
                    >
                      Add new content
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem key="crear" onClick={handleCloseNavMenu}>
                    <Button
                      onClick={() => {
                        dispatch(openCrearModal())
                      }}
                    >
                      Create new course
                    </Button>
                  </MenuItem>
                )}
                {role === 'ALUMNO_ROLE' && !!activeCourse ? (
                  <MenuItem key="ver_curso" onClick={handleCloseNavMenu}>
                    <Button component={Link} to="/course">
                      See course
                    </Button>
                  </MenuItem>
                ) : null}
                {role === 'ALUMNO_ROLE' && !!activeCourse ? (
                  <MenuItem key="comentarios" onClick={handleCloseNavMenu}>
                    <Button component={Link} to="/comments">
                      Comments
                    </Button>
                  </MenuItem>
                ) : null}
                {role === 'ALUMNO_ROLE' ? (
                  !!activeCourse ? null : (
                    <MenuItem key="buscar" onClick={handleCloseNavMenu}>
                      <Button
                        key="buscar_curso"
                        component={Link}
                        to="/search"
                        sx={{ display: 'block' }}
                      >
                        Search courses
                      </Button>
                    </MenuItem>
                  )
                ) : null}
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
              <IconButton
                sx={{ mr: 2 }}
                onClick={colorMode.toggleColorMode}
                aria-label="change color theme"
                color="inherit"
              >
                {theme.palette.mode === 'dark' ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>

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
                {role === 'PROFESOR_ROLE' && !!!activeCourse && (
                  <Button
                    key="crear"
                    sx={{ color: 'white', display: 'block' }}
                    onClick={() => {
                      dispatch(openCrearModal())
                    }}
                  >
                    Create new course
                  </Button>
                )}

                {role === 'ALUMNO_ROLE' && !!!activeCourse && (
                  <Button
                    key="buscar_curso"
                    component={Link}
                    to="/search"
                    sx={{ color: 'white', display: 'block' }}
                  >
                    Search courses
                  </Button>
                )}

                {role === 'PROFESOR_ROLE' && !!activeCourse ? (
                  <Button
                    key="añadir"
                    sx={{ color: 'white', display: 'block' }}
                    onClick={() => {
                      dispatch(openAddModal())
                    }}
                  >
                    Add new content
                  </Button>
                ) : null}
                {!!activeCourse ? (
                  <>
                    <Button
                      key="ver_curso"
                      component={Link}
                      to="/course"
                      sx={{ color: 'white', display: 'block' }}
                    >
                      See course
                    </Button>
                    <Button
                      key="comentarios"
                      component={Link}
                      to="/comments"
                      sx={{ color: 'white', display: 'block' }}
                    >
                      Comments
                    </Button>
                  </>
                ) : null}
              </Box>

              <Box sx={{ flexGrow: 1, display: 'flex' }} />
              <IconButton
                sx={{ mr: 2 }}
                onClick={colorMode.toggleColorMode}
                aria-label="change color theme"
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
