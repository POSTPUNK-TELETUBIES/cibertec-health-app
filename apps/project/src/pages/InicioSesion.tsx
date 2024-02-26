import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { iniciarSesion } from '../auth'
import { useSnackbar } from 'notistack'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import loginSchema from '../forms/loginSchema'
import { useFormik } from 'formik'
import img from '/login.png'
import imgbg from '/login-bg.png'
import { MainLogo } from 'ui'

const InicioSesion = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { setIsAuthenticated } = useAuth()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      correo: '',
      contrasena: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (formData) => {
      const { error } = await iniciarSesion(formData)
      if (error) {
        enqueueSnackbar('Error al iniciar sesión', {
          variant: 'error',
          autoHideDuration: 2000,
        })
      } else {
        setIsAuthenticated(true)
        navigate('/')
        enqueueSnackbar('Inicio de sesión exitoso', {
          variant: 'success',
          autoHideDuration: 2000,
        })
      }
    },
  })

  return (
    <>
      <Grid container sx={{ backgroundColor: '#f4feff', overflow: 'hidden' }}>
        <Grid
          item
          xs={4.5}
          p={6}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100vh'}
          width={'100%'}
          marginLeft={'5%'}
        >
          <Typography
            variant='h1'
            textAlign={'center'}
            mb={4}
            component={'h2'}
            fontWeight={'lighter'}
          >
            Hai<span style={{ fontWeight: 'bold' }}>Doc</span>{' '}
            <MainLogo style={{ width: '60px', height: '65px', marginBottom: '20px' }} />
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
            gap={2}
            component={'form'}
            onSubmit={formik.handleSubmit}
            width={'100%'}
            maxWidth={350}
          >
            <TextField
              name='correo'
              value={formik.values.correo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.correo && Boolean(formik.errors.correo)}
              helperText={formik.touched.correo && formik.errors.correo}
              variant='outlined'
              placeholder='Correo electrónico'
            />
            <TextField
              name='contrasena'
              value={formik.values.contrasena}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.contrasena && Boolean(formik.errors.contrasena)}
              helperText={formik.touched.contrasena && formik.errors.contrasena}
              variant='outlined'
              type='password'
              placeholder='Contraseña'
            />

            <Button variant='contained' type='submit' sx={{ margin: 'auto', marginTop: '10px' }}>
              Ingresar
            </Button>

            <Typography variant='body2' textAlign={'center'} mt={2}>
              <Link to='/solicitarCambioContrasena' style={{ textDecoration: 'none' }}>
                <Typography color={'primary'} fontWeight={'bold'}>
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Link>
            </Typography>

            <Typography variant='body2' textAlign={'center'} mt={2} fontSize={'16px'}>
              ¿No tienes una cuenta?{' '}
              <Link to='/registrate' style={{ textDecoration: 'none' }} color='red'>
                <Typography color={'secondary'} fontWeight={'bold'} display={'inline-block'}>
                  Registrate
                </Typography>
              </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6.5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box
            width={'100%'}
            height={'100%'}
            position={'relative'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img
              src={imgbg}
              alt='imagen'
              style={{
                position: 'absolute',
                transform: 'scale(1)',
                marginTop: '-5%',
                width: '100%',
                height: '90%',
                objectFit: 'contain',
              }}
            />
            <img
              src={img}
              alt='imagen'
              style={{
                position: 'absolute',
                marginTop: '7%',
                width: '60%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default InicioSesion
