import { Container, Grid, Typography } from '@mui/material'
import HomeLayout from '../../layouts/HomeLayout'
import Title from '../../components/Title'
import Separador from '../../components/Separador'
import CardCitaMedica from '../../components/CardCitaMedica'
import db from '../../db'
import { CitaMedica } from '../../types/citaMedica'
import { useEffect, useState } from 'react'

const MisCitasMedicas = () => {
  const [citas, setCitas] = useState<CitaMedica[]>([])

  useEffect(() => {
    const fetchData = async () => {
      setCitas((await db.citaMedica.getMany(0, 50)) as CitaMedica[])
    }
    fetchData()
  }, [])

  return (
    <HomeLayout>
      <Container>
        <Title>Mis citas médicas</Title>
        <Separador />

        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} mb={8} pt={6}>
          {citas.map((cita) => (
            <Grid item xs={12} md={6} key={cita.id}>
              <CardCitaMedica {...cita} />
            </Grid>
          ))}
        </Grid>

        {citas.length === 0 && (
          <Typography variant='h5' color={'gray'}>
            No hay resultados
          </Typography>
        )}
      </Container>
    </HomeLayout>
  )
}

export default MisCitasMedicas
