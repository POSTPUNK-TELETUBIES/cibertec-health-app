import { Box, Container } from '@mui/material'
import HomeLayout from '../../layouts/HomeLayout'
import Title from '../../components/Title'
import Separador from '../../components/Separador'
import Formulario from './Formulario'

const ReservarNuevaCita = () => {
  return (
    <HomeLayout>
      <Container>
        <Title>Reservar nueva cita</Title>
        <Separador />

        <Box mt={4}>
          <Formulario />
        </Box>
      </Container>
    </HomeLayout>
  )
}

export default ReservarNuevaCita
