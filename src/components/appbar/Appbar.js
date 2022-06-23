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

// import { startLogout } from '../../actions/auth'
// import { openNotifications } from '../../actions/ui'

// import './appbar.css'

const pages = ['Login', 'Register']
const settings = ['Profile', 'Logout']

export const Appbar = () => {
  // const dispatch = useDispatch()
  const { uid, name } = useSelector((state) => state.auth)
  // const { notifications } = useSelector((state) => state.notify)

  const nombres = name !== undefined ? name.split(' ') : ['User']

  const handleLogout = () => {
    // dispatch(startLogout())
  }

  const handleShowNotifications = () => {
    // dispatch(openNotifications())
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
        {/* <Container maxWidth="xl"> */}
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={!!uid ? '/' : '/home'}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            UNI-Edu
          </Typography>

          {!!uid ? null : (
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
                    <Button
                      component={Link}
                      to={`/auth/${page}`}
                      // textAlign="center"
                    >
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
            href={!!uid ? '/' : '/home'}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              // fontFamily: 'monospace',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            UNI-Edu
          </Typography>

          {!!uid ? null : (
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

          {!!uid ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt={nombres[0]}
                      // src="/static/images/avatar/2.jpg"
                    />
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
        {/* </Container> */}
      </AppBar>
    </Box>
  )
}
