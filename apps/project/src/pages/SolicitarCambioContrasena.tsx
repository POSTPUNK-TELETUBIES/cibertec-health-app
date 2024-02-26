import { Box, Button, TextField, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import { solicitarCambioContrasena } from '../auth'
import { object, string } from 'yup'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const validateSchema = object({
  correo: string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio'),
})

const SolicitarCambioContrasena = () => {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      correo: '',
    },
    validationSchema: validateSchema,
    onSubmit: async (formData) => {
      const { error } = await solicitarCambioContrasena(formData)

      if (error) {
        enqueueSnackbar('Error al solicitar cambio de contraseña', {
          variant: 'error',
          autoHideDuration: 2000,
        })
      } else {
        enqueueSnackbar(
          'Si tu correo esta registrado te enviaremos un enlace para cambiar tu contraseña, revisa tu buzon de entrada o spam.',
          {
            variant: 'success',
            autoHideDuration: 2000,
          }
        )
      }
    },
  })

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      maxWidth={450}
      margin={'auto'}
      minHeight={'100vh'}
      p={4}
    >
      <Typography variant='h2' textAlign={'center'} mb={4}>
        Solicitar cambio de contraseña
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        component={'form'}
        onSubmit={formik.handleSubmit}
        width={'100%'}
      >
        <Typography variant='body1'>
          Ingresa tu correo electrónico asociado a tu cuenta, si está registrado te enviaremos un
          link a tu correo para que actualizes tu contraseña.
        </Typography>
        <TextField
          name='correo'
          id='correo'
          variant='outlined'
          value={formik.values.correo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.correo && Boolean(formik.errors.correo)}
          helperText={formik.touched.correo && formik.errors.correo}
          placeholder='Correo electrónico'
        />
        <Button variant='contained' type='submit' sx={{ m: 'auto', mt: 2 }}>
          Enviame el link
        </Button>

        <Typography variant='body2' textAlign={'center'} mt={2} fontSize={'16px'}>
          ¿Tienes una cuenta?{' '}
          <Link
            to='/iniciarSesion'
            style={{ textDecoration: 'none', fontWeight: 'bold' }}
            color={'secondary'}
          >
            <Typography color={'secondary'} fontWeight={'bold'} display={'inline-block'}>
              Inicia sesión
            </Typography>
          </Link>
        </Typography>

        <Typography variant='body2' textAlign={'center'} fontSize={'16px'}>
          ¿No tienes una cuenta?{' '}
          <Link to='/registrate' style={{ textDecoration: 'none' }} color='red'>
            <Typography color={'secondary'} fontWeight={'bold'} display={'inline-block'}>
              Registrate
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default SolicitarCambioContrasena
