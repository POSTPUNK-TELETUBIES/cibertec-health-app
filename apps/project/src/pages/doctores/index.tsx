import { Container, Grid, Typography } from '@mui/material'
import HomeLayout from '../../layouts/HomeLayout'
import Title from '../../components/Title'
import Separador from '../../components/Separador'
import CardDoctor from '../../components/CardDoctor'
import { Doctor } from '../../types/doctor'
import db from '../../db'
import { useEffect, useState } from 'react'
// import Selectores from './Selectores'

// const doctores: Doctor[] = (await db.doctor.getMany(0, 50)) as Doctor[]

const VerDoctores = () => {
  const [doctores, setDoctores] = useState<Doctor[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setDoctores((await db.doctor.getMany(0, 50)) as Doctor[])
    }
    fetchData()
  }, [])

  return (
    <HomeLayout>
      <Container>
        <Title>Doctores</Title>
        <Separador />
        {/* <Box width={200} m={'auto'} my={4}>
          <Selectores />
        </Box> */}

        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} mb={8} pt={6}>
          {doctores.map((doctor) => (
            <Grid item xs={12} md={6} key={doctor.id}>
              <CardDoctor {...doctor} />
            </Grid>
          ))}
        </Grid>

        {doctores.length === 0 && (
          <Typography variant='h5' color={'gray'}>
            No hay resultados
          </Typography>
        )}
      </Container>
    </HomeLayout>
  )
}

export default VerDoctores
