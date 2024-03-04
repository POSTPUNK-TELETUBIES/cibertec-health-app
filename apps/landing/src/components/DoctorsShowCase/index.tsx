import { Box, Typography, Link, Button } from "@mui/material"
import Image from "next/image"

export const DoctorsShowCase = ()=>{
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
    <Box display={'flex'} flexDirection={'column'} gap={'1rem'}
      sx={{
        '& > h4':{
          
        },
        '& > p':{

        },
        '& > span':{
          fontSize: '4.5rem',
        }
      }}>
      <Typography variant="h4">
        Nuestros doctores
      </Typography>
      <Typography
          component={'span'} 
          color="sheldon"
          fontSize={'inherit'} 
          fontWeight={'inherit'}
        >
          Médicos calificados
      </Typography>
      <Typography>
        Atendido directamente por médicos generales y profesionales, también médicos especialistas con experiencia. 
      </Typography>
      <Box display={'flex'} flexDirection={'column'}
        sx={
          {
            height: '100%',
            width: '100%',
            backgroundImage: `url('./office-doctor.jpg')`,
            backgroundSize: 'cover',
            filter: 'contrast(100%) brightness(90%)',
            padding: '.5rem',
            borderRadius: '20px 0 20px 0',
            '& > p':{
              color: 'black'
            },
            '& > h4':{
              fontSize: '2.8rem',
            },
            '& > a':{
              fontSize: '1.5rem',
              textDecoration: 'none',
              margin: '1rem',
            },
            '& > h4, & > p':{
              padding: '1rem',
            }
          }
        }>
        <Typography variant="body1">
          Ortepedia
        </Typography>
        <Typography variant="h4">
          Dr. James Wellington
        </Typography>
        <Link href={'/'}>Leer más</Link>
      </Box>
      <Button variant="contained"
      sx={{
        maxWidth: '70%',
        width: '30rem',
        margin: '2.5rem auto',
      }}
      href={`${process.env.PROJECT_URL}/#/verDoctores`}
       >
        Ver todos los doctores
        </Button>
    </Box>
    <Image
      width={800}
      height={600}
      alt="doctora con lentes"
      src={"./doctorCalificado.png"}
      />
  </Box>
}
