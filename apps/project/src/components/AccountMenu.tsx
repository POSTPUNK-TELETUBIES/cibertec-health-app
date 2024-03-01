import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import KeyIcon from '@mui/icons-material/Key'
import EventIcon from '@mui/icons-material/Event'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MoreTimeIcon from '@mui/icons-material/MoreTime'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import CerrarSesion from './CerrarSesion'
import { useMediaQuery } from '@mui/material'

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { user } = useAuth()
  const navigate = useNavigate()
  const isMobile = useMediaQuery('(max-width: 1040px)')

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {!isMobile && (
          <>
            <MenuItem onClick={() => navigate('/reservarNuevaCita')}>
              <ListItemIcon>
                <MoreTimeIcon />
              </ListItemIcon>
              Reservar nueva cita
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => navigate('/misCitasMedicas')}>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              Mis citas médicas
            </MenuItem>
            <MenuItem onClick={() => navigate('/verDoctores')}>
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              Doctores
            </MenuItem>
            <MenuItem onClick={() => navigate('/verSucursales')}>
              <ListItemIcon>
                <MapsHomeWorkIcon />
              </ListItemIcon>
              Sucursales
            </MenuItem>
          </>
        )}

        <Tooltip title='Perfil'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> {user}
        </MenuItem>
        <Divider />

        {isMobile && (
          <>
            <MenuItem onClick={() => navigate('/reservarNuevaCita')}>
              <ListItemIcon>
                <MoreTimeIcon />
              </ListItemIcon>
              Reservar nueva cita
            </MenuItem>

            <MenuItem onClick={() => navigate('/misCitasMedicas')}>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
              Mis citas médicas
            </MenuItem>

            <MenuItem onClick={() => navigate('/verDoctores')}>
              <ListItemIcon>
                <LocalHospitalIcon />
              </ListItemIcon>
              Ver doctores
            </MenuItem>

            <MenuItem onClick={() => navigate('/verSucursales')}>
              <ListItemIcon>
                <MapsHomeWorkIcon />
              </ListItemIcon>
              Ver sucursales
            </MenuItem>

            <Divider />
          </>
        )}

        <MenuItem onClick={() => navigate('/cambiarContrasena')}>
          <ListItemIcon>
            <KeyIcon />
          </ListItemIcon>
          Cambiar mi contraseña
        </MenuItem>

        <Divider />
        <CerrarSesion />
      </Menu>
    </React.Fragment>
  )
}
