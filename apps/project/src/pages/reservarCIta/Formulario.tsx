import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { Doctor } from '../../types/doctor'
import db from '../../db'
import { especialidades, tiposCitaMedica } from '../../examples/others'
import { Sucursal } from '../../types/sucursal'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'

const validateSchema = object({
  doctor: string().required('Es obligatoria'),
  sucursal: string().required('Es obligatoria'),
  especialidad: string().required('Es obligatoria'),
  tipoCita: string().required('Es obligatoria'),
  fecha: string().required('Es obligatoria'),
})

const Formulario = () => {
  const { enqueueSnackbar } = useSnackbar()

  const [doctores, setDoctores] = useState<Doctor[]>([])
  const [sucursales, setSucursales] = useState<Sucursal[]>([])

  useEffect(() => {
    const fetchDoctores = async () => {
      const doctores = (await db.doctor.getMany(0, 50)) as Doctor[]
      setDoctores(doctores)
    }

    const fetchSucursales = async () => {
      const sucursales = (await db.sucursal.getMany(0, 50)) as Sucursal[]
      setSucursales(sucursales)
    }

    fetchDoctores()
    fetchSucursales()
  }, [])

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
          <MenuItem value='2024-04-01'>01/04/2024</MenuItem>
          <MenuItem value='2024-04-02'>02/04/2024</MenuItem>
          <MenuItem value='2024-04-05'>05/04/2024</MenuItem>
          <MenuItem value='2024-04-06'>06/04/2024</MenuItem>
          <MenuItem value='2024-04-09'>09/04/2024</MenuItem>
          <MenuItem value='2024-04-10'>10/04/2024</MenuItem>
          <MenuItem value='2024-04-12'>12/04/2024</MenuItem>
          <MenuItem value='2024-04-14'>14/04/2024</MenuItem>
          <MenuItem value='2024-04-16'>16/04/2024</MenuItem>
          <MenuItem value='2024-04-18'>18/04/2024</MenuItem>
        </Select>
      </FormControl>

      <Button variant='contained' type='submit' sx={{ m: 'auto', mt: 2 }}>
        Reservar mi cita médica
      </Button>
    </Box>
  )
}

export default Formulario
