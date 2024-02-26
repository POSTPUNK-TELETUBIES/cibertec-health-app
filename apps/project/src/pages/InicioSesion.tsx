import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { iniciarSesion } from '../auth'
import RegisterLayout from '../layouts/RegisterLayout'
import { useSnackbar } from 'notistack'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import loginSchema from '../forms/loginSchema'
import { useFormik } from 'formik'

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
    <RegisterLayout>
      <Typography variant='h3' textAlign={'center'} mb={4}>
        Iniciar sesión
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        component={'form'}
        onSubmit={formik.handleSubmit}
      >
        <InputLabel htmlFor='correo'>Correo electrónico</InputLabel>
        <TextField
          id='correo'
          variant='outlined'
          size='small'
          name='correo'
          value={formik.values.correo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.correo && Boolean(formik.errors.correo)}
          helperText={formik.touched.correo && formik.errors.correo}
        />
        <InputLabel htmlFor='contrasena'>Contraseña</InputLabel>
        <TextField
          id='contrasena'
          variant='outlined'
          size='small'
          type='password'
          name='contrasena'
          value={formik.values.contrasena}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.contrasena && Boolean(formik.errors.contrasena)}
          helperText={formik.touched.contrasena && formik.errors.contrasena}
        />

        <Typography variant='body2'>
          <Link to='/solicitarCambioContrasena'>Solicitar cambiar de contraseña</Link>
        </Typography>

        <Button variant='contained' type='submit'>
          Iniciar sesión
        </Button>

        <Typography variant='body2' textAlign={'center'}>
          ¿Aún no tienes una cuenta? <Link to='/registrate'>Registrate</Link>
        </Typography>
      </Box>
    </RegisterLayout>
  )
}

export default InicioSesion
