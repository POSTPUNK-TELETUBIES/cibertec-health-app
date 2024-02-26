import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { registrarse } from '../auth'
import { useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import RegisterLayout from '../layouts/RegisterLayout'
import { useFormik } from 'formik'
import registerSchema from '../forms/registerSchema'

const Registro = () => {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      correo: '',
      contrasena: '',
      dni: '',
      nombres: '',
      apellidos: '',
      sexo: '',
      fechaNacimiento: '',
      telefono: '',
      direccion: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (formData) => {
      const { error } = await registrarse(formData)

      if (error) {
        enqueueSnackbar('Ocrrio un error al enviar el correo de verificación, intenta de nuevo.', {
          variant: 'error',
          autoHideDuration: 2000,
        })
      } else {
        enqueueSnackbar('Te hemos enviado un enlace de verificación a tu correo electrónico', {
          variant: 'success',
          autoHideDuration: 2000,
        })
      }
    },
  })

  return (
    <RegisterLayout>
      <Typography variant='h3' textAlign={'center'} mb={4}>
        Regístrate
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        gap={2}
        component={'form'}
        onSubmit={formik.handleSubmit}
      >
        <InputLabel htmlFor='nombres'>Nombres</InputLabel>
        <TextField
          id='nombres'
          variant='outlined'
          size='small'
          name='nombres'
          value={formik.values.nombres}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.nombres && Boolean(formik.errors.nombres)}
          helperText={formik.touched.nombres && formik.errors.nombres}
        />
        <InputLabel htmlFor='apellidos'>Apellidos</InputLabel>
        <TextField
          id='apellidos'
          variant='outlined'
          size='small'
          name='apellidos'
          value={formik.values.apellidos}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.apellidos && Boolean(formik.errors.apellidos)}
          helperText={formik.touched.apellidos && formik.errors.apellidos}
        />

        <InputLabel htmlFor='dni'>DNI</InputLabel>
        <TextField
          id='dni'
          variant='outlined'
          size='small'
          name='dni'
          value={formik.values.dni}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.dni && Boolean(formik.errors.dni)}
          helperText={formik.touched.dni && formik.errors.dni}
        />

        <InputLabel htmlFor='sexo'>Sexo</InputLabel>
        <Select
          labelId='sexo'
          id='demo-select-small'
          size='small'
          name='sexo'
          value={formik.values.sexo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.sexo && Boolean(formik.errors.sexo)}
        >
          <MenuItem value=''>Ninguno</MenuItem>
          <MenuItem value={'male'}>Masculino</MenuItem>
          <MenuItem value={'female'}>Femenino</MenuItem>
        </Select>

        <InputLabel htmlFor='telefono'>Fecha de nacimiento</InputLabel>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker onChange={formik.handleChange} />
          </DemoContainer>
        </LocalizationProvider>

        <InputLabel htmlFor='direccion'>Dirección</InputLabel>
        <TextField
          name='direccion'
          id='direccion'
          variant='outlined'
          size='small'
          value={formik.values.direccion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.direccion && Boolean(formik.errors.direccion)}
          helperText={formik.touched.direccion && formik.errors.direccion}
        />
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
        <InputLabel htmlFor='telefono'>Telefono</InputLabel>
        <TextField
          id='telefono'
          variant='outlined'
          size='small'
          style={{ width: '100%' }}
          name='telefono'
          value={formik.values.telefono}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.telefono && Boolean(formik.errors.telefono)}
          helperText={formik.touched.telefono && formik.errors.telefono}
        />
        <InputLabel htmlFor='contrasena'>Contraseña</InputLabel>
        <TextField
          name='contrasena'
          id='contrasena'
          variant='outlined'
          size='small'
          type='password'
          value={formik.values.contrasena}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.contrasena && Boolean(formik.errors.contrasena)}
          helperText={formik.touched.contrasena && formik.errors.contrasena}
        />

        <Button variant='contained' type='submit'>
          Registrate
        </Button>

        <Typography variant='body2' textAlign={'center'}>
          ¿Ya tienes una cuenta? <Link to='/iniciarSesion'>Inicia sesión</Link>
        </Typography>
      </Box>
    </RegisterLayout>
  )
}

export default Registro
