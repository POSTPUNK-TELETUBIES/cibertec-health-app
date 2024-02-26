import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import { useSnackbar } from 'notistack'
import { actualizarContrasena } from '../auth'
import { useFormik } from 'formik'
import { object, string } from 'yup'

const validateSchema = object({
  contrasena: string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
})

const ChangePassword = () => {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      newContrasena: '',
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
    <>
      <Typography variant='h2' textAlign={'center'} mb={4}>
        Cambiar contraseña
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        component={'form'}
        onSubmit={formik.handleSubmit}
      >
        <InputLabel htmlFor='newContrasena'>Ingresa tu nueva contraseña</InputLabel>
        <TextField
          name='newContrasena'
          id='newContrasena'
          variant='outlined'
          size='small'
          value={formik.values.newContrasena}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newContrasena && Boolean(formik.errors.newContrasena)}
          helperText={formik.touched.newContrasena && formik.errors.newContrasena}
        />
        <Button variant='contained' type='submit'>
          Guardar
        </Button>
      </Box>
    </>
  )
}

export default ChangePassword
