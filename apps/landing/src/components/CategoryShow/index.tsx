import { Box, Card, Typography } from "@mui/material"
import { ChatDoctorIcon } from "../ChatDoctorIcon"
import { PillsIcon } from "../PillsIcon"
import { HospitalIcon } from "../HospitalIcon"

export const CategoryShow = ()=>{
  return <Box
    paddingInline={{xs: '1rem', md:'6rem'}}
    paddingBlock={4}
  >
    <Typography align='center' variant="h2">
      Nuestras <Typography 
        color="sheldon" 
        fontSize='inherit' 
        fontWeight='inherit'
        component='span'
      >
        principales 
      </Typography> <br/>Categorias
    </Typography>
    <Box display='flex' gap={4}>
      <Card 
        sx={{
          flexBasis:{xs: '100%', md: '33%'},
          backgroundColor: '#F4FEFF'
        }}>  
        <Box display={'grid'} sx={{placeItems: 'center'}}>
          <ChatDoctorIcon />
        </Box>
        <Typography fontSize={'1.5rem'} variant='h4'>
          Chat con doctor
        </Typography>
        <Typography variant='body2'>
          Podrás conectarte de forma directa, rápida y sencilla, y no tendrás que dudar de la calidad de la consulta y el tratamiento ofrecido.
        </Typography>
      </Card>
      <Card 
        sx={{
          flexBasis:{xs: '100%', md: '33%'},
          backgroundColor: '#F4FEFF',
          background: 'linear-gradient(180deg, #4ED6DA 0%, #04789D 100%)'
        }}>  
        <Box display={'grid'} sx={{placeItems: 'center'}}>
          <PillsIcon sx={{
            fontSize: 98,
            marginBlock: '2rem',
            borderRadius: '50%',
            backgroundColor: 'white'
          }} />
        </Box>
        <Typography color='white' fontSize={'1.5rem'} variant='h4'>
          Chat con doctor
        </Typography>
        <Typography color='white' variant='body2'>
          Podrás conectarte de forma directa, rápida y sencilla, y no tendrás que dudar de la calidad de la consulta y el tratamiento ofrecido.
        </Typography>
      </Card>
      <Card 
        sx={{
          flexBasis:{xs: '100%', md: '33%'},
          backgroundColor: '#F4FEFF'
        }}>  
        <Box display={'grid'} sx={{placeItems: 'center'}}>
          <HospitalIcon sx={{
            fontSize: 98,
            marginBlock: '2rem',
            borderRadius: '50%',
            backgroundColor: 'white'
          }} />
        </Box>
        <Typography fontSize={'1.5rem'} variant='h4'>
          Chat con doctor
        </Typography>
        <Typography variant='body2'>
          Podrás conectarte de forma directa, rápida y sencilla, y no tendrás que dudar de la calidad de la consulta y el tratamiento ofrecido.
        </Typography>
      </Card>

    </Box>
  </Box>
}
