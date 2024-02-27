import { Box, Button, TextField, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import { actualizarContrasena } from '../auth'
import { useFormik } from 'formik'
import { object, ref, string } from 'yup'

const validateSchema = object({
  newContrasena: string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  repetirContrasena: string()
    .oneOf([ref('newContrasena')], 'Las contraseñas deben coincidir')
    .required('La confirmación de contraseña es requerida'),
})

const ChangePassword = () => {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      newContrasena: '',
      repetirContrasena: '',
    },
    validationSchema: validateSchema,
    onSubmit: async (formData) => {
      const { error } = await actualizarContrasena(formData)

      if (error) {
        enqueueSnackbar('Error al cambiar la contraseña', {
          variant: 'error',
          autoHideDuration: 2000,
        })
      } else {
        enqueueSnackbar('Se actualizó correctamente la contraseña', {
          variant: 'success',
          autoHideDuration: 2000,
        })
      }
    },
  })

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      maxWidth={400}
      margin={'auto'}
      minHeight={'100vh'}
      p={4}
    >
      <Typography variant='h2' textAlign={'center'} mb={4} color={'secondary'}>
        Cambiar contraseña
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        component={'form'}
        onSubmit={formik.handleSubmit}
        width={'100%'}
      >
        <TextField
          variant='outlined'
          name='newContrasena'
          type='password'
          value={formik.values.newContrasena}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newContrasena && Boolean(formik.errors.newContrasena)}
          helperText={formik.touched.newContrasena && formik.errors.newContrasena}
          placeholder='Nueva contraseña'
        />
        <TextField
          name='repetirContrasena'
          id='repetirContrasena'
          variant='outlined'
          type='password'
          value={formik.values.repetirContrasena}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.repetirContrasena && Boolean(formik.errors.repetirContrasena)}
          helperText={formik.touched.repetirContrasena && formik.errors.repetirContrasena}
          placeholder='Repetir nueva contraseña'
        />
        <Button variant='contained' type='submit' sx={{ m: 'auto' }}>
          Actualizar mi contraseña
        </Button>
      </Box>
    </Box>
  )
}

export default ChangePassword
