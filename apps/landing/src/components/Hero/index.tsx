import { Box, Button, Stack, Typography } from "@mui/material"
import Image from "next/image"

const Plus = ()=><Typography
  component='span'
  color='#007299'
  fontSize={'inherit'} 
  fontWeight={'inherit'}
  >
    +
  </Typography>


export const Hero = ()=>{
  return (
    <Box
      sx={{
        backgroundColor:'#F4FEFF'
      }}
      paddingInline={{xs: '1rem', md: '3rem',lg:'6rem'}}
      paddingBlock={4}
    >
      <Box 
        display={'flex'} 
        gap={'1rem'} 
        maxWidth={'90rem'} 
        margin={'auto'}>
      <Stack
        gap={'3.5rem'} 
        justifyContent={'center'}
        alignItems={{
          xs: 'center',
          lg: 'flex-start'
        }}
        flexBasis={{
          xs: '100%',
          lg: '50%'
        }}
      >
        <Typography
          variant="h1" 
          maxWidth={{xs:'50ch',lg:'unset'}}
        >
          Estamos listos <br />
          <Typography 
            component={'span'} 
            color="sheldon"
            fontSize={'inherit'} 
            fontWeight={'inherit'}
          >
            para ayudarte <Box component={'br'} display={{lg:'none'}}/>
          </Typography>
          {" "}con tu salud 
        </Typography>
        <Typography
          variant="body1"
          sx={{maxWidth: '50ch'}}
          >
          En tiempos como hoy, tu salud es muy importante, especialmente porque el número de casos de COVID-19 es aumentando día a día, por eso estamos listos para ayudarte con tu consulta de salud
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          sx={{
            width: 'fit-content'
          }}
          href={`${process.env.PROJECT_URL}/#/registrate`}
        >Registrate
        </Button>
        <Box display={'flex'} gap={'3rem'}>
          <Typography variant="h4">
            200<Plus/>
            <Typography>
              Doctores
            </Typography>
          </Typography>
          <Typography variant="h4">
            15K<Plus/>
            <Typography>
              Clientes
            </Typography>
          </Typography>
          <Typography variant="h4">
            50<Plus/>
            <Typography>
              Farmacias
            </Typography>
          </Typography>
        </Box>
      </Stack>
      <Box
        display={'grid'} 
        flexBasis={{
          xs: 0,
          lg: '50%'
        }} 
        sx={{
          placeItems: 'center',
          '& img':{
            position: 'static !important',
            height: 'unset !important' ,
            maxHeight: '52rem',
            maxWidth: '600px'
          },
          
        }}>
        <Image
          fill
          alt="doctor"
          src={"/doctorsHero.webp"}
        />
      </Box>
      </Box>
    </Box>
  )
}
