import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Doctor } from '../../types/doctor'
import db from '../../db'
import { especialidades, tiposCitaMedica } from '../../examples/others'
import { Sucursal } from '../../types/sucursal'
import { citaMedicaExample } from '../../examples'
import { useSnackbar } from 'notistack'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'

const validateSchema = object({
  doctor: string().required('Es obligatoria'),
  sucursal: string().required('Es obligatoria'),
  especialidad: string().required('Es obligatoria'),
  tipoCita: string().required('Es obligatoria'),
  fecha: string().required('Es obligatoria'),
})

const doctores: Doctor[] = (await db.doctor.getMany(0, 50)) as Doctor[]
const sucursales: Sucursal[] = (await db.sucursal.getMany(0, 50)) as Sucursal[]

const Formulario = () => {
  const { enqueueSnackbar } = useSnackbar()

  const formik = useFormik({
    initialValues: {
      doctor: '',
      sucursal: '',
      especialidad: '',
      tipoCita: '',
      fecha: '',
    },
    validationSchema: validateSchema,
    onSubmit: async (formData) => {
      console.log('enviado')
      console.log(formData)

      const citaMedica = await db.citaMedica.createOne({
        doctor_id: formData.doctor,
        sucursal_id: formData.sucursal,
        especialidad: formData.especialidad,
        tipo_cita: formData.tipoCita,
        fecha: formData.fecha,
      })

      if (!citaMedica) {
        enqueueSnackbar('Ups, ocurrio un error al reservar la cita, intentelo nuevamente', {
          variant: 'error',
          autoHideDuration: 3000,
        })
      } else {
        enqueueSnackbar('Tu cita se reservó exitosamente', {
          variant: 'success',
          autoHideDuration: 2000,
        })
      }
    },
  })

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
      component={'form'}
      onSubmit={formik.handleSubmit}
      width={'100%'}
      maxWidth={'600px'}
      m={'auto'}
      pt={4}
    >
      {/* DOCTOR */}
      <FormControl fullWidth>
        <InputLabel id='doctor-label'>Doctor</InputLabel>
        <Select
          labelId='doctor-label'
          label='Doctor'
          name='doctor'
          value={formik.values.doctor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.doctor && Boolean(formik.errors.doctor)}
        >
          {doctores.map((doctor) => (
            <MenuItem key={doctor.id} value={doctor.id}>
              {doctor.nombres + ' ' + doctor.apellidos}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* ESPECIALIDAD */}
      <FormControl fullWidth>
        <InputLabel id='especialidad-label'>Especialidad</InputLabel>
        <Select
          labelId='especialidad-label'
          label='especialidad'
          name='especialidad'
          value={formik.values.especialidad}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.especialidad && Boolean(formik.errors.especialidad)}
        >
          {especialidades.map((especialidad, index) => (
            <MenuItem key={index} value={especialidad}>
              {especialidad}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* SUCURSAL */}
      <FormControl fullWidth>
        <InputLabel id='sucursal-label'>Sucursal</InputLabel>
        <Select
          labelId='sucursal-label'
          label='sucursal'
          name='sucursal'
          value={formik.values.sucursal}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.sucursal && Boolean(formik.errors.sucursal)}
        >
          {sucursales.map((sucursal) => (
            <MenuItem key={sucursal.id} value={sucursal.id}>
              {sucursal.nombre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* TIPO DE CITA */}
      <FormControl fullWidth>
        <InputLabel id='tipoCita-label'>Tipo de cita</InputLabel>
        <Select
          labelId='tipoCita-label'
          label='tipoCita'
          name='tipoCita'
          value={formik.values.tipoCita}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.tipoCita && Boolean(formik.errors.tipoCita)}
        >
          {tiposCitaMedica.map((tipoCita, index) => (
            <MenuItem key={index} value={tipoCita}>
              {tipoCita}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* FECHA */}
      <FormControl fullWidth>
        <InputLabel id='fecha-label'>Fecha</InputLabel>
        <Select
          labelId='fecha-label'
          label='fecha'
          name='fecha'
          value={formik.values.fecha}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fecha && Boolean(formik.errors.fecha)}
        >
          <MenuItem value='2022-12-12'>12/12/2022</MenuItem>
          <MenuItem value='2022-12-13'>13/12/2022</MenuItem>
          <MenuItem value='2022-12-14'>14/12/2022</MenuItem>
          <MenuItem value='2022-12-15'>15/12/2022</MenuItem>
          <MenuItem value='2022-12-16'>16/12/2022</MenuItem>
          <MenuItem value='2022-12-17'>17/12/2022</MenuItem>
          <MenuItem value='2022-12-18'>18/12/2022</MenuItem>
        </Select>
      </FormControl>

      {/* <InputLabel htmlFor='telefono'>Fecha de nacimiento</InputLabel>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker onChange={formik.handleChange} />
        </DemoContainer>
      </LocalizationProvider> */}

      <Button variant='contained' type='submit' sx={{ m: 'auto', mt: 2 }}>
        Reservar mi cita médica
      </Button>
    </Box>
  )
}

export default Formulario
