import { Container, Grid, Typography } from '@mui/material'
import HomeLayout from '../../layouts/HomeLayout'
import Title from '../../components/Title'
import Separador from '../../components/Separador'
import CardSucursal from '../../components/CardSucursal'
import db from '../../db'
import { SucursalResponse } from '../../types/sucursal'
import { useEffect, useState } from 'react'

const VerSucursales = () => {
  const [sucursales, setSucursales] = useState<SucursalResponse[]>([])

  useEffect(() => {
    const fetchSucursales = async () => {
      const sucursales = (await db.sucursal.getMany(0, 50)) as SucursalResponse[]
      setSucursales(sucursales)
    }

    fetchSucursales()
  }, [])

  return (
    <HomeLayout>
      <Container>
        <Title>Sucursales</Title>
        <Separador />

        {/* <Box width={200} m={'auto'} my={4}>
          <SelectorProvincia />
        </Box> */}

        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} mb={8} pt={6}>
          {sucursales.map((sucursal, index) => (
            <Grid item xs={12} md={6} key={index}>
              <CardSucursal
                nombre={sucursal.nombre}
                direccion={sucursal.direccion}
                telefono={sucursal.telefono}
                ubicacion_mapa={sucursal.ubicacion_mapa}
              />
            </Grid>
          ))}

          {sucursales.length === 0 && (
            <Typography variant='h5' color={'gray'}>
              No hay resultados
            </Typography>
          )}
        </Grid>
      </Container>
    </HomeLayout>
  )
}

export default VerSucursales
