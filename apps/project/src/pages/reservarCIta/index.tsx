import { Container, Grid } from '@mui/material'
import HomeLayout from '../../layouts/HomeLayout'
import Title from '../../components/Title'
import Separador from '../../components/Separador'
import Formulario from './Formulario'
import img from '/img.webp'

const ReservarNuevaCita = () => {
  return (
    <HomeLayout>
      <Container sx={{ pb: 6 }}>
        <Title>Reservar nueva cita</Title>
        <Separador />

        <Grid container mt={4} justifyItems={'center'}>
          <Grid
            item
            xs={12}
            md={5}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <img src={img} alt='fotos de dos doctores' style={{ margin: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>
    </HomeLayout>
  )
}

export default ReservarNuevaCita
