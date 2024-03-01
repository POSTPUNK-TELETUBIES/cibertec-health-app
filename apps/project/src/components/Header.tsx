import { Box, Button, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import AccountMenu from './AccountMenu'
import Logo from './Logo'

const Header = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Paper
      elevation={0}
      style={{ zIndex: 2 }}
      sx={{ background: (theme) => theme.palette.background.default }}
    >
      <Box
        display='flex'
        gap={1}
        py={2}
        px={4}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>

        <Box display='flex' gap={2}>
          {isAuthenticated ? (
            <AccountMenu />
          ) : (
            <>
              <Link to='/iniciarSesion'>
                <Button variant='outlined'>Iniciar sesión</Button>
              </Link>
              <Link to='/registrate'>
                <Button variant='outlined'>Registrate</Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
    </Paper>
  )
}

export default Header
