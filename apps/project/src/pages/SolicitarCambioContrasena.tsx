import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import { solicitarCambioContrasena } from '../auth'
import { object, string } from 'yup'
import { useFormik } from 'formik'

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
    <>
      <Typography variant='h2' textAlign={'center'} mb={4}>
        Solicitar cambio de contraseña
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
          name='correo'
          id='correo'
          variant='outlined'
          size='small'
          value={formik.values.correo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.correo && Boolean(formik.errors.correo)}
          helperText={formik.touched.correo && formik.errors.correo}
        />
        <Button variant='contained' type='submit'>
          Enviar correo
        </Button>
      </Box>
    </>
  )
}

export default SolicitarCambioContrasena
