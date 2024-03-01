import { Avatar, Container, Paper, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import { useEffect, useState } from 'react'
import { Doctor } from '../types/doctor'
import db from '../db'

const PerfilDoctor = () => {
  const { id } = useParams()

  const [doctor, setDoctor] = useState({} as Doctor)

  useEffect(() => {
    const fetchData = async () => {
      setDoctor((await db.doctor.getOne(id ?? '1')) as Doctor)
    }
    fetchData()
  }, [])

  return (
    <HomeLayout>
      <Container sx={{ my: 4 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            py: 6,
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: 600,
            margin: 'auto',
          }}
        >
          <Avatar src='/static/images/avatar/1.jpg' sx={{ width: 200, height: 200 }} />
          <Typography
            variant='h4'
            mt={4}
            fontWeight={'bold'}
          >{`${doctor.nombres} ${doctor.apellidos}`}</Typography>

          <Typography variant='h5' mt={2} color={'primary'}>
            Cargo:
          </Typography>
          <Typography variant='h6' mt={2}>
            {'Doctor'}
          </Typography>

          <Typography variant='h5' mt={2} color={'primary'}>
            Especialidad:
          </Typography>
          <Typography variant='h6' mt={2}>
            {doctor.especialidad}
          </Typography>

          <Typography variant='h5' mt={2} color={'primary'}>
            Correo electrónico
          </Typography>
          <Typography variant='h6' mt={2}>
            <a
              href={`mailto:${doctor.email}`}
              style={{ textDecoration: 'none', color: 'black' }}
              title='Enviar correo'
            >
              {doctor.email}
            </a>
          </Typography>

          <Typography variant='h5' mt={2} color={'primary'}>
            Teléfono
          </Typography>
          <Typography variant='h6' mt={2}>
            <a
              href={`tel:${doctor.telefono}`}
              style={{ textDecoration: 'none', color: 'black' }}
              title='Llamar'
            >
              {doctor.telefono}
            </a>
          </Typography>

          <Typography variant='h5' mt={2} color={'primary'}>
            DNI
          </Typography>
          <Typography variant='h6' mt={2}>
            {doctor.dni}
          </Typography>
        </Paper>
      </Container>
    </HomeLayout>
  )
}

export default PerfilDoctor
