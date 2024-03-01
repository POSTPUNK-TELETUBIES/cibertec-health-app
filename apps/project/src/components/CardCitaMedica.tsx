import { Box, Chip, Stack, Typography } from '@mui/material'
import { CitaMedica } from '../types/citaMedica'
import { useEffect, useState } from 'react'
import { Doctor } from '../types/doctor'
import { Sucursal } from '../types/sucursal'
import db from '../db'
import { formatearFecha } from '../utils/formatearFecha'

const CardCitaMedica = (cita: CitaMedica) => {
  const [doctor, setDoctor] = useState<Doctor>({} as Doctor)
  const [sucursal, setSucursal] = useState<Sucursal>({} as Sucursal)

  useEffect(() => {
    const fetchData = async () => {
      setDoctor((await db.doctor.getOne(cita.doctor_id)) as Doctor)
      setSucursal((await db.sucursal.getOne(cita.sucursal_id)) as Sucursal)
    }
    fetchData()
  }, [])

  return (
    <Box border={'2px solid #1086a6'} py={2} px={2} borderRadius={4} flexWrap={'wrap'}>
      <Box display={'flex'} justifyContent={'space-between'} mb={2}>
        <Stack direction='row' spacing={1}>
          <Chip label={formatearFecha(`${cita.fecha}`)} color='primary' />
          <Chip label={cita.especialidad} color='success' />
        </Stack>

        <Stack direction='row' spacing={1}>
          <Chip label={cita.estado} color='warning' />
        </Stack>
      </Box>

      <Typography fontWeight={'bold'}>Doctor:</Typography>
      <Typography>{`${doctor.nombres} ${doctor.apellidos}`}</Typography>
      <Typography fontWeight={'bold'} mt={1}>
        Sucursal:
      </Typography>
      <Typography>{sucursal.nombre}</Typography>
    </Box>
  )
}

export default CardCitaMedica
