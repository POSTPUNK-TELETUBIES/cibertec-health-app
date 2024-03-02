import { Box, Button, Paper, Typography } from '@mui/material'
import Logo from './Logo'

const Header = () => {
  return (
    <Paper elevation={0} style={{ zIndex: 2 }} sx={{ background: '#f4feff' }}>
      <Box
        display='flex'
        gap={1}
        py={2}
        px={4}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography href='/' component={'a'} style={{ textDecoration: 'none' }}>
          <Logo />
        </Typography>

        <Box display={'flex'} gap={2}>
          <Button variant='text' href='/'>
            Inicio
          </Button>
          <Button variant='text' href='/'>
            Sobre Haidoc
          </Button>
          <Button variant='outlined' href='/'>
            Iniciar sesión
          </Button>
          <Button variant='outlined' href='/'>
            Registrate
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default Header
