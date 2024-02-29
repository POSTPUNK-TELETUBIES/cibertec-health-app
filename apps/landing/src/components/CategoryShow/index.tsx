import { Box, Card, Typography, CardProps} from "@mui/material"
import { ChatDoctorIcon } from "../ChatDoctorIcon"
import { PillsIcon } from "../PillsIcon"
import { HospitalIcon } from "../HospitalIcon"
import { BoltRounded } from "@mui/icons-material"

const CardFlexBg = ({sx, ...rest}:CardProps)=>{
  return<Card sx={[
    {
      flexBasis:{xs: '100%', md: '33%'},
      background: '#F4FEFF',
      padding: '5rem 2rem',
      boxShadow: '4px 5px 29px -13px black',
      transition: 'background-color .2s ease',
      '&:hover': {
        // background: 'linear-gradient(180deg, #4ED6DA 0%, #04789D 100%)',
        backgroundColor: '#4ED6DA',
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0) 50%, #04789D 100%)',
        '& > h4 , & > p':{
          color: 'white'
        }
      },
      '& > h4': {
        fontSize: '1.9rem',
        margin: '3rem 0'
      },
      '& > p': {
        fontSize: '1.2rem',
        lineHeight: '2.4rem'
      }
    },
    ...(Array.isArray(sx) ? sx : [sx]) // this shit made me suffer https://mui.com/system/getting-started/the-sx-prop/#passing-the-sx-prop
  ]} {...rest}/>
}

export const CategoryShow = ()=>{
  return <Box
    paddingInline={{xs: '1rem', md:'6rem'}}
    paddingBlock={4}
  >
    <Typography sx={{ margin: '0 0 3rem'}} align='center' variant="h2">
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
      <CardFlexBg>  
        <Box display={'grid'} sx={{placeItems: 'center'}}>
          <ChatDoctorIcon />
        </Box>
        <Typography fontSize={'1.5rem'} variant='h4'>
          Chat con doctora
        </Typography>
        <Typography variant='body2'>
          Podrás conectarte de forma directa, rápida y sencilla, y no tendrás que dudar de la calidad de la consulta y el tratamiento ofrecido.
        </Typography>
      </CardFlexBg>
      <CardFlexBg>  
        <Box display={'grid'} sx={{placeItems: 'center'}}>
          <PillsIcon sx={{
            fontSize: 98,
            marginBlock: '2rem',
            borderRadius: '50%',

            backgroundColor: 'white',
            height: '20rem',
            width: '20rem',
            border: '2px solid #4ED6DA',
            boxShadow: '4px 5px 12px -9px black',
          }} />
        </Box>
        <Typography fontSize={'1.5rem'} variant='h4'>
          Chat con doctor
        </Typography>
        <Typography variant='body2'>
          Hable sobre problemas de salud que está experimentando y no dude en preguntar sobre el tratamiento adecuado.
        </Typography>
      </CardFlexBg>
      <CardFlexBg>  
        <Box display={'grid'} sx={{placeItems: 'center'}}>
          <HospitalIcon sx={{
            fontSize: 98,
            marginBlock: '2rem',
            borderRadius: '50%',
            backgroundColor: 'white',

            height: '20rem',
            width: '20rem',
            border: '2px solid #4ED6DA',
            boxShadow: '4px 5px 12px -9px black',
          }} />
        </Box>
        <Typography fontSize={'1.5rem'} variant='h4'>
          Chat con doctor
        </Typography>
        <Typography variant='body2'>
          Obtenga servicios prioritarios en clinicas con Haidoc. Lo que te permite acudir a la clínica de forma más práctica y ahorarr tiempo.
        </Typography>
      </CardFlexBg>

    </Box>
  </Box>
}
