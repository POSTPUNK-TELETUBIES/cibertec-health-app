import { Box, Button, Typography } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import RoomIcon from '@mui/icons-material/Room'

interface CardSucursalProps {
  nombre: string
  direccion: string
  telefono: string
  ubicacion_mapa: [latitude: number, longitude: number]
}

const CardSucursal = ({ nombre, direccion, telefono, ubicacion_mapa }: CardSucursalProps) => {
  return (
    <Box border={'2px solid #1086a6'} py={2} px={2} borderRadius={4}>
      <Typography variant='h5' fontWeight={'bold'} mb={1} color={'primary'}>
        {nombre}
      </Typography>

      <Typography fontWeight={'bold'}>Dirección:</Typography>
      <Typography>{direccion}</Typography>

      <Box display={'flex'} gap={2} mt={2} flexWrap={'wrap'}>
        <Button variant='outlined' startIcon={<LocalPhoneIcon />} href={`tel:+${telefono}`}>
          {telefono}
        </Button>
        <Button variant='outlined' startIcon={<RoomIcon />} href={''} target='_blank'>
          Como llegar
        </Button>
      </Box>
    </Box>
  )
}

export default CardSucursal
