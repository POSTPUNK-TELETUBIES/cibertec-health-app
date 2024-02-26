import { Box, Button, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import AccountMenu from './AccountMenu'
// import Logo from './Logo'
import { MainLogo } from 'ui'

const Header = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Paper elevation={1} style={{ zIndex: 2 }}>
      <Box display='flex' gap={1} p={2} justifyContent={'space-between'}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          {/* <Logo /> */}
          <MainLogo />
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
