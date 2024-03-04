'use client'

import {
  Box,
  Divider,
  ListItemIcon,
  MenuItem,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material'
import { MainLogo } from 'ui'
import EventIcon from '@mui/icons-material/Event'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'

const theme = createTheme()
const base = process.env.PROJECT_URL!

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ zIndex: 2 }} sx={{ background: '#f4feff' }}>
        <Box
          display='flex'
          gap={1}
          py={2}
          px={4}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography
            textAlign={'center'}
            component={'h2'}
            variant='h2'
            fontWeight={'lighter'}
            color={'secondary'}
            fontSize={'1.7rem'}
          >
            <a href={base} style={{ textDecoration: 'none', color: '#172048' }}>
              Hai<span style={{ fontWeight: 'bold' }}>Doc</span>{' '}
              <MainLogo style={{ width: '24px', height: '24px', marginBottom: '5px' }} />
            </a>
          </Typography>

          <Box display='flex' gap={2}>
            <a
              href={`${base}/#/reservarNuevaCita`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <MenuItem>
                <ListItemIcon>
                  <MoreTimeIcon />
                </ListItemIcon>
                Reservar nueva cita
              </MenuItem>
            </a>

            <Divider />
            <a
              href={`${base}/#/misCitasMedicas`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <MenuItem>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                Mis citas médicas
              </MenuItem>
            </a>
            <a href={`${base}#/verDoctores`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem>
                <ListItemIcon>
                  <LocalHospitalIcon />
                </ListItemIcon>
                Doctores
              </MenuItem>
            </a>
            <a href={`${base}#/verSucursales`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem>
                <ListItemIcon>
                  <MapsHomeWorkIcon />
                </ListItemIcon>
                Sucursales
              </MenuItem>
            </a>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default Header
