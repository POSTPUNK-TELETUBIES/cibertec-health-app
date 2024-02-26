import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { MainLogo } from '../MainLogo'
import { Dispatch, MouseEvent, PropsWithChildren, ReactNode, SetStateAction, useState } from 'react';

export interface NavbarProps{
  homeHref: string;
  askAppointmentHref: string;
  seeYourAppointmentsHref: string;
  techHref: string;
  servicesHref: string;
  actionButtons?: ReactNode
}

export interface WithMenuProps extends PropsWithChildren{
  buttonChildren: ReactNode
}

export type UseControlMenuResponse = [
  handleClick: (event: MouseEvent<HTMLButtonElement>)=>void, 
  handleClose: ()=>void
] & {
  handleClick: (event: MouseEvent<HTMLButtonElement>)=>void, 
  handleClose: ()=>void
}

const useControlMenu = (setAnchorEl: Dispatch<SetStateAction<HTMLElement | undefined>>)=>{
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  const result = [handleClick, handleClose]

  Object.assign(result, {
    handleClick,
    handleClose
  })

  return result as UseControlMenuResponse
}

const WithMenu =({buttonChildren, children}:WithMenuProps )=>{
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()
  const open = !!anchorEl

  const [handleClick, handleClose] = useControlMenu(setAnchorEl)

  return(
    <>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {buttonChildren}
      </Button>
      <Menu
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        keepMounted
      >
        {children}
      </Menu>
    </>
  )
}

export const Navbar = ({
  homeHref,
  askAppointmentHref,
  seeYourAppointmentsHref,
  servicesHref,
  techHref,
  actionButtons
}: NavbarProps)=>{
  return(
    <AppBar position='sticky' sx={{
      paddingInline: '6rem',
      backgroundColor: 'white'
    }}>
      <Toolbar sx={{padding: '1rem', }}>
        <Typography>Hai<Typography component={'strong'} >Doc</Typography></Typography>
        <MainLogo /> 
        <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent={'space-around'}>
          <Button href={homeHref}>Inicio</Button>
          <WithMenu buttonChildren={'Citas'}>
            <MenuItem href={askAppointmentHref}>
              Pide tu cita
            </MenuItem>
            <MenuItem href={seeYourAppointmentsHref}>
              Mis citas
            </MenuItem>
          </WithMenu>
          <WithMenu buttonChildren={'Sobre HaiDoc'}>
          <MenuItem href={servicesHref}>
              Tecnologia
            </MenuItem>
            <MenuItem href={techHref}>
              Servicios
            </MenuItem>
          </WithMenu>
        </Box>
        {actionButtons}
      </Toolbar>
    </AppBar>
  )
}
