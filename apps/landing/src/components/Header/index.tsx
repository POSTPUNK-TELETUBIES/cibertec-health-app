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
  useMediaQuery,
} from '@mui/material'
import { MainLogo } from 'ui'
import EventIcon from '@mui/icons-material/Event'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

const theme = createTheme()
const base = process.env.PROJECT_URL!

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 1040px)')

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

          {!isMobile && (
            <Box display='flex' gap={2}>
             <a
                href="https://postpunk-teletubies.github.io/cibertec-health-app/landing/"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  Inicio
                </MenuItem>
              </a>
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
              <a
                href={`${base}#/verSucursales`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <MapsHomeWorkIcon />
                  </ListItemIcon>
                  Sucursales
                </MenuItem>
              </a>
              <a
                href="https://postpunk-teletubies.github.io/cibertec-health-app/landing/sobre"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  Sobre HaiDoc
                </MenuItem>
              </a>
            </Box>
          )}
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default Header
