import { Box, Typography } from "@mui/material"
import Image from "next/image"

export const OurServices = ()=>{
  return <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} paddingInline={{xs: '1rem', md: '3rem',lg:'6rem'}}
  flexBasis={{
    xs: 0,
    lg: '50%'
  }} 
  sx={{
    placeItems: 'center',
    '& img':{
      maxHeight: '52rem',
      maxWidth: '600px'
    },
    
  }}>
    <Image
      width={600}
      height={1000}
      alt="female doctor smiling"
      src={"/doctorService.png"}
      />
    <Box display={'flex'} flexDirection={'column'}>
      <Typography variant="h4" sx={{
        margin: '.5rem 0',
        fontSize: '2.9rem',
        }}>
        Nuestros
        <Typography
          component={'span'} 
          color="sheldon"
          fontSize={'inherit'} 
          fontWeight={'inherit'}
        >
            {' '}Servicios
        </Typography>
      </Typography>
      <Typography variant="body1" sx={{
        maxWidth: '50ch',
      }}>
        En tiempos como hoy, tu salud es muy importante, especialmente porque el número de casos de COVID-19 es aumentando día a día, por eso estamos listos para ayudarte con tu consulta de salud
      </Typography>
      <Box display={'grid'} gap={2} gridTemplateColumns={'1fr 1fr'} margin={'2rem 0'}>
        <Box display={'flex'} flexDirection={'column'}
        sx={{
          '& > img':{
            backgroundColor: '#4ED6DA',
            backgroundImage: 'linear-gradient(180deg, #4CD3D8 0%, #03779C 100%)',
            borderRadius: '10px',
            padding: '10px',
          },
          '& > h4, & > p':{
            margin: '.5rem 0'
          }
        }}>
          <Image
            width={55}
            height={55}
            alt="potion"
            src={"/covid-test.png"}

          />
          <Typography variant="h4">
            Prueba Covid-19
          </Typography>
          <Typography fontWeight={'100'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolores aut asperiores.
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'}
        sx={{
          '& > img':{
            backgroundColor: '#4ED6DA',
            backgroundImage: 'linear-gradient(180deg, #4CD3D8 0%, #03779C 100%)',
            borderRadius: '10px',
            padding: '10px',
          },
          '& > h4, & > p':{
            margin: '.5rem 0'
          }
        }}>
          <Image
            width={55}
            height={55}
            alt="potion"
            src={"/supplement.png"}
          />
          <Typography variant="h4">
            Medicamentos
          </Typography>
          <Typography fontWeight={'100'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt amet rerum.
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'}
        sx={{
          '& > img':{
            backgroundColor: '#4ED6DA',
            backgroundImage: 'linear-gradient(180deg, #4CD3D8 0%, #03779C 100%)',
            borderRadius: '10px',
            padding: '10px',
          },
          '& > h4, & > p':{
            margin: '.5rem 0'
          }
        }}>
          <Image
            width={55}
            height={55}
            alt="potion"
            src={"/flask.png"}
          />
          <Typography variant="h4">
            Laboratorio
          </Typography>
          <Typography fontWeight={'100'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eveniet culpa quae.
          </Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'}
        sx={{
          '& > img':{
            backgroundColor: '#4ED6DA',
            backgroundImage: 'linear-gradient(180deg, #4CD3D8 0%, #03779C 100%)',
            borderRadius: '10px',
            padding: '10px',
          },
          '& > h4, & > p':{
            margin: '.5rem 0'
          }
        }}>
          <Image
            width={55}
            height={55}
            alt="potion"
            src={"/schedule.png"}
          />
          <Typography variant="h4">
            Calendarios
          </Typography>
          <Typography fontWeight={'100'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate culpa similique?
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
}
