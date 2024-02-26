import { Box, Button, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { registrarse } from '../auth'
import { useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { useFormik } from 'formik'
import registerSchema from '../forms/registerSchema'
import img from '/bgForm.jpg'

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
      repetirContrasena: '',
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
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={6}
    >
      <img
        src={img}
        alt=''
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.5,
        }}
      />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        // sx={{ backgroundColor: 'pink' }}
        width={'100%'}
        maxWidth={600}
        zIndex={1}
      >
        <Typography variant='h2' textAlign={'center'} mb={4} component={'h3'}>
          Regístrate
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
            id='nombres'
            variant='outlined'
            size='small'
            name='nombres'
            value={formik.values.nombres}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.nombres && Boolean(formik.errors.nombres)}
            helperText={formik.touched.nombres && formik.errors.nombres}
            placeholder='Nombres'
          />
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
            placeholder='Apellidos'
          />

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
            placeholder='DNI'
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
            placeholder='Sexo'
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
            placeholder='Dirección del domicilio'
          />
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
            placeholder='Correo electrónico'
          />
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
            placeholder='Teléfono'
          />
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
            placeholder='Contraseña'
          />

          <TextField
            name='repetirContrasena'
            id='repetirContrasena'
            variant='outlined'
            size='small'
            type='password'
            value={formik.values.repetirContrasena}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.repetirContrasena && Boolean(formik.errors.repetirContrasena)}
            helperText={formik.touched.repetirContrasena && formik.errors.repetirContrasena}
            placeholder='Repetir contraseña'
          />

          <Button variant='contained' type='submit' sx={{ margin: 'auto' }}>
            Registrate
          </Button>

          <Typography variant='body2' textAlign={'center'}>
            ¿Ya tienes una cuenta? <Link to='/iniciarSesion'>Inicia sesión</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Registro
