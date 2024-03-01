import { Box, Button, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { Doctor } from '../types/doctor'
import { useEffect, useState } from 'react'
import { Sucursal } from '../types/sucursal'
import db from '../db'
import { useNavigate } from 'react-router-dom'

const CardDoctor = (doctor: Doctor) => {
  const [sucursal, setSucursal] = useState<Sucursal>({} as Sucursal)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      setSucursal((await db.sucursal.getOne(doctor.centro_medico)) as Sucursal)
    }
    fetchData()
  }, [])

  return (
    <Box border={'2px solid #1086a6'} py={2} px={2} borderRadius={4}>
      <Typography variant='h5' fontWeight={'bold'} mb={1} color={'primary'}>
        {doctor.nombres + ' ' + doctor.apellidos}
      </Typography>
      <Typography fontWeight={'bold'}>Especialidad:</Typography>
      <Typography>{doctor.especialidad}</Typography>
      <Typography fontWeight={'bold'} mt={1}>
        Centro médico:
      </Typography>
      <Typography>{sucursal.nombre ?? 'ninguno'} </Typography>
      <Box display={'flex'} gap={2} mt={2} flexWrap={'wrap'}>
        <Button
          variant='outlined'
          startIcon={<AssignmentIndIcon />}
          onClick={() => navigate(`/perfilDoctor/${doctor.id}`)}
        >
          Ver perfil
        </Button>
        <Button variant='outlined' startIcon={<FavoriteIcon />}>
          Agregar como favorito
        </Button>
      </Box>
    </Box>
  )
}

export default CardDoctor
