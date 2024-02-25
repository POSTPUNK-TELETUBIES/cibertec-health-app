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
      display={'flex'} 
      gap={'1rem'}
      paddingInline={{xs: '1rem', md:'6rem'}}
      paddingBlock={4}
    >
      <Stack
        gap={3} 
        justifyContent={'space-between'}
        flexBasis={{
          xs: '100%',
          md: '50%'
        }}
      >
        <Typography
          variant="h1" 
        >
          Estamos listos <br/>
          <Typography 
            component={'span'} 
            color="sheldon"
            fontSize={'inherit'} 
            fontWeight={'inherit'}
          >
            para ayudarte <br/>
          </Typography>
          con tu salud 
        </Typography>
        <Typography variant="body1">
          En tiempos como hoy, tu salud es muy importante, especialmente porque el número de casos de COVID-19 es aumentando día a día, por eso estamos listos para ayudarte con tu consulta de salud
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          sx={{
            width: 'fit-content'
          }}
        >
          Afiliate
        </Button>
        <Box display={'flex'} gap={'1rem'}>
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
          md: '50%'
        }} 
        sx={{
          placeItems: 'center',
          '& img':{
            position: 'static !important',
            height: 'unset !important' 
          }
        }}>
        <Image
          fill
          alt="doctor"
          src={"/doctorsHero.png"}
        />
      </Box>
    </Box>
  )
}
