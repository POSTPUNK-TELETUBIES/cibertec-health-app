import { Box, Button, Typography } from '@mui/material'
import HomeLayout from '../layouts/HomeLayout'
import { useNavigate } from 'react-router-dom'

const ConfirmarEmail = () => {
  const navigate = useNavigate()

  return (
    <HomeLayout>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'column'}
        gap={3}
        minHeight={'80vh'}
      >
        <Typography component={'h3'} variant='h5' maxWidth={500} textAlign={'center'}>
          Tu correo electrónico ha sido confirmado. Ahora puedes iniciar sesión.
        </Typography>
        <Button variant='contained' onClick={() => navigate('/')}>
          Iniciar sesión
        </Button>
      </Box>
    </HomeLayout>
  )
}

export default ConfirmarEmail
